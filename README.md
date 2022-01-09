# DRHEEWON | 닥터마틴 클론 프로젝트 - frontend



<div align='center'>
 <img src='https://user-images.githubusercontent.com/23470125/148685959-d7769f0e-3f16-46a3-ae6c-86c77673421d.png'>
</div>


## 프로젝트 소개 💁🏻‍♀️

닥터마틴 클론 프로젝트를 진행한 28기 닥터희원팀입니다.<br>
해당 `repository`는 닥터희원팀의 frontend 멤버들이 구현한 내용이 들어 있어요.

<br>

## 구성원 👥

### **Frontend**

`강희원`, `김용선`, `김정현`, `이석호`

### **Backend**

`김재엽`

<br>

## 사용된 기술 🛠

### Used DevTools

JavaScript(ES6) / React(v17) Hook / Sass / sider

### Collabo Tools

Git&Github / Slack / Trello

### Libraries

React-router-dom 외 라이브러리 지양

### Code Formatter

eslint / prettier

<br>

## 구현한 내용 🎨

- 메인 페이지
```
- 5초 주기로 이동하며, 버튼을 눌러서도 이동가능한 슬라이더
- 2개 상품, 각각 2개씩의 이미지가 담겨 이동되는 슬라이더
 - 장바구니 담기 통신 기능 포함 
- Sticky position과 함께 scroll event가 적용된 동적 영역
- Skeleton UI
```

- 네비게이션 바 & 햄버거 메뉴
```
- 상단 버튼을 이용한 라우팅 ( 로그인, 회원가입, 로그아웃 )
- 토큰 존재 유무에 따른 버튼 렌더링 분화. ( 로그인, 회원가입 또는 로그아웃 )
- localStorage 토큰 삭제를 통한 로그아웃
- 햄버거 버튼 클릭시 히든 메뉴 점멸
- 히든 메뉴의 커스텀 수직 / 수평 스크롤바 구현
```

- 회원가입

```
- 필수 입력 사항: 이름, 아이디, 이메일, 비밀번호, 비밀번호 확인, 생년월일, 휴대폰 번호
- 유효성 검사
아이디: 중복 확인
비밀번호: 문자, 특수 문자, 숫자가 각각 1개 이상이면서 총 8자 이상
비밀번호 확인: 비밀번호와 동일해야함
```

- 로그인

```
- 로그인 버튼 활성화
- 아이디 및 비밀번호 유효성 검사
```

- 상품 리스트

```
- 카테고리 선택에 따른 맞춤 상품 리스트 정렬
- 배열형태로 정렬되어진 상품 구조
```

- 상품 상세보기

```
- 이미지 슬라이더 기능 추가 및 레이아웃 개선
- 사이즈, 수량, 컬러 선택 후 장바구니 버튼 클릭 시 백엔드 서버로 유저 데이터 전송
- 상품 후기 무한 스크롤(3개) 구현
```

- 장바구니

```
- 전체 선택 및 제품 선택
- 선택한 제품들, 각각의 제품 직접 삭제 (DB 전송)
- 구매할 시 구매한 상품의 데이터 DB에 전송
- 상품이 존재하지 않는 화면
```

<br>

## 담당한 파트 👩🏻‍🎨

- 메인 페이지 | **김정현**
<img src='https://user-images.githubusercontent.com/23470125/148690794-58291de4-5077-41d5-8159-d471fe43ad54.png' width=50%>
<img src='https://user-images.githubusercontent.com/23470125/148690814-a08a3e7d-466a-4d5c-b88d-5af452d35690.png' width=50%>
![skeletonUiEffect](https://user-images.githubusercontent.com/23470125/148690930-40c6fb42-47ec-4d86-97c0-487e13e9c497.gif)


- 네비게이션 바 & 햄버거 메뉴 | **김정현**
![navGif](https://user-images.githubusercontent.com/23470125/148691003-7340f6d4-7166-440b-a1bd-52f93215b015.gif)

- 회원가입 | **강희원**

- 로그인 | **강희원**

- 상품 리스트 | **김용선**

- 상품 상세보기 | **이석호**

- 장바구니 | **강희원**
