var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');
var express = require('express');
var app = express();
var mysql=require('mysql');
var bodyParser=require('body-parser');
var room=null;
const finding = 1;
const notFinding = 2;
const chating = 3;
var clients = [];
var multer = require('multer');
const upload = require('./config/multer');

var client=mysql.createConnection({
    user:'root',
    password:'0712',
    database:'chat',
    insecureAuth: true
});

var server = http.createServer(app);
app.get('/', (request, response) => {
  fs.readFile('HTMLPage.html', (error, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
})
server.listen(52273, () => {
  console.log('Server Running at http://127.0.0.1:52273');
});

var io=socketio();
io.attach(server);
io.sockets.on('connection', (socket) => {
  var roomName = null;

  socket.on('join', (data) => {
    roomName = data;
    socket.join(data);
  });

  socket.on("nickNameCheck",function(data){
    if(!data.name){
        socket.emit("nullError","닉네임을 입력해주세요");
        return ;
    }

    for(var a = 0; a<clients.length;a++){
        if(clients[a].name == data.name){
            socket.emit("sameNameError","동일한 닉네임이 존재합니다");
            return ;
        }
    }
    clients.push({
          name:data.name, //사용자의 닉네임
          client:socket, //사용자의 소켓
          roomName:data.room, //사용자가 들어가 있는 방 이름
          status:notFinding //사용자의 상태
      });
    io.sockets.to(data.room).emit('nickNameCheckComplete',{name:data.name,room:data.room});
});


socket.on('exit', (data)=>{
  socket.broadcast.in(data.room).emit('exit', data);
  for(var a = 0; a<clients.length; a++){
      if(clients[a].roomName == data.room){
          clients[a].client.join(clients[a].client.id);
          clients[a].roomName = "";
          clients[a].status = notFinding;
    }
  }
  client.query('DELETE FROM chat_info WHERE room=? AND name=?',[data.room,data.name],function(){
  });

});



  socket.on('message', (data) => {
    if(data.message!=''){
    io.sockets.in(data.room).emit('message',data);
    client.query("INSERT INTO chat_info (name, message, date, room) VALUES (?, ?, ?, ?)", [
        data.name, data.message, data.date, data.room
      ], function(){
        console.log('Data Insert OK');
    });
    }
  });

  socket.on('image', (data)=>{
    io.sockets.in(roomName).emit('image', data);
    console.log(data);
  });

});

app.post( '/image', upload.single("image"), function(req, res, next) {

  try {

    console.log(req.file)

    var data = req.file;
    res.send(data.location);


  } catch (error) {
    console.error(error);
    next(error);
  }
});
