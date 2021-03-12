# group_chat_project
nodejs의 socket.io를 활용한 그룹채팅 웹 애플리케이션입니다.

## 구현

![1](https://user-images.githubusercontent.com/80513241/110921920-76e9ce80-8362-11eb-8f46-3cd73927d60a.png)
### 1. 프롬프트를 사용하여 입력창에 방이름을 입력받는다.


![2](https://user-images.githubusercontent.com/80513241/110921923-77826500-8362-11eb-81f6-c74d7d35b9b7.png)
### 2. Start Chat을 눌러 채팅을 시작한다.

### -같은방에 있는 사람들끼리는 닉네임이 겹칠 수 없다.

### -닉네임이 중복되면 알림으로 알려준뒤 자동으로 다시 닉네임을 입력하게 만든다.


![3](https://user-images.githubusercontent.com/80513241/110921925-77826500-8362-11eb-862a-a69b3c51a141.png)
### 3. 닉네임을 입력하고 ‘Start Chat’ 버튼을 누르면 채팅창에 ‘ㅇㅇㅇ’방에 ‘ㅇㅇㅇ’ 님이 입장했습니다.라고 보여진다.


![4](https://user-images.githubusercontent.com/80513241/110921926-781afb80-8362-11eb-9802-39b2318158b1.png)
### 4. ‘Send’버튼을 눌러 Text를 채팅창에 전송한다. 채팅창 형식은(닉네임,메시지,날짜,방이름)순으로 나온다.

### -Send버튼을 누르면 입력되었던 내용이 자동으로 초기화된다.

### -빈 내용은 전달되지 않는다.

### -채팅창 내용(닉네임,메시지,날짜,방이름) chat데이터베이스 chat_info테이블에 저장된다.


![5](https://user-images.githubusercontent.com/80513241/110921907-75200b00-8362-11eb-8768-4e1426396f88.png)
### 5. ‘파일 선택’버튼으로 이미지를 업로드하고 ‘Send Image’버튼으로 업로드한 이미지를 주고 받을 수 있다. (확인 메시지로 complte라고 알람 창이 뜬다.)


![6](https://user-images.githubusercontent.com/80513241/110921912-76513800-8362-11eb-8a1b-d447cc97accf.png)
### 6. 방별로 채팅이 가능하다.


![7](https://user-images.githubusercontent.com/80513241/110921917-76e9ce80-8362-11eb-9160-9d1904df82ae.png)
### 7. ‘Exit’버튼을 누르면 자신이 속한방에 있는 사람들에게 브로드캐스트로 ㅇㅇㅇ’방에 ‘ㅇㅇㅇ’ 님이 퇴장하였습니다. 라는 메시지를 채팅창에 뿌리고 본인은 End 페이지로 이동된다.

### -Clients의 status 값이 notFinding으로 바껴진다.

### -DB에서도 삭제된다.
