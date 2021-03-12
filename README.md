# group_chat_project
nodejs의 socket.io를 활용한 그룹채팅 웹 애플리케이션입니다.

## 주요기능
  1. 상대방과 단순 채팅 : socket.io를 통해 양방향 통신을 가능하게 한다.

  2. 그룹 채팅 : 대화방을 생성하고 참여하게 만든다.

  3. 채팅 내용 저장 : DBserver와 연동하여 사용자이름과 채팅내용을 저장한다.

  4. 사진 전송 : 사진을 업로드하여 전송할 수 있다.



## 구현


### 1. 프롬프트를 사용하여 입력창에 방이름을 입력받는다. 
![1](https://user-images.githubusercontent.com/80513241/110924368-4eaf9f00-8365-11eb-9958-7da62c3db501.png)




### 2. Start Chat을 눌러 채팅을 시작한다.

### -같은방에 있는 사람들끼리는 닉네임이 겹칠 수 없다.

### -닉네임이 중복되면 알림으로 알려준뒤 자동으로 다시 닉네임을 입력하게 만든다.
![2](https://user-images.githubusercontent.com/80513241/110924371-4eaf9f00-8365-11eb-9993-1b4ebfd6c663.png)




### 3. 닉네임을 입력하고 ‘Start Chat’ 버튼을 누르면 채팅창에 ‘ㅇㅇㅇ’방에 ‘ㅇㅇㅇ’ 님이 입장했습니다.라고 보여진다.
![3](https://user-images.githubusercontent.com/80513241/110924374-4f483580-8365-11eb-86c2-fbf36b1d890c.png)




### 4. ‘Send’버튼을 눌러 Text를 채팅창에 전송한다. 채팅창 형식은(닉네임,메시지,날짜,방이름)순으로 나온다.

### -Send버튼을 누르면 입력되었던 내용이 자동으로 초기화된다.

### -빈 내용은 전달되지 않는다.

### -채팅창 내용(닉네임,메시지,날짜,방이름) chat데이터베이스 chat_info테이블에 저장된다.
![4](https://user-images.githubusercontent.com/80513241/110924376-4f483580-8365-11eb-9f77-f471591e18e9.png)



### 5. ‘파일 선택’버튼으로 이미지를 업로드하고 ‘Send Image’버튼으로 업로드한 이미지를 주고 받을 수 있다. (확인 메시지로 complte라고 알람 창이 뜬다.)
![5](https://user-images.githubusercontent.com/80513241/110924360-4ce5db80-8365-11eb-88ae-6b74752d83cd.png)




### 6. 방별로 채팅이 가능하다.
![6](https://user-images.githubusercontent.com/80513241/110924365-4d7e7200-8365-11eb-9a12-5712eafdb0b2.png)




### 7. ‘Exit’버튼을 누르면 자신이 속한방에 있는 사람들에게 브로드캐스트로 ㅇㅇㅇ’방에 ‘ㅇㅇㅇ’ 님이 퇴장하였습니다. 라는 메시지를 채팅창에 뿌리고 본인은 End 페이지로 이동된다.

### -Clients의 status 값이 notFinding으로 바껴진다.

### -DB에서도 삭제된다.
![7](https://user-images.githubusercontent.com/80513241/110924366-4e170880-8365-11eb-96b4-b3a4412100b3.png)
