# Dr.Martens Project

닥터마틴을 모티브로 기존 웹사이트의 불편함을 개선하여, 이전보다 상품을 편하게 확인 할 수 있는 웹 커머스 프로젝트 입니다.

21.02.27 - 22.01.06

[구현영상](http://drheewon.s3-website.ap-northeast-2.amazonaws.com/) | [Github](https://github.com/Seokho0120/28-1st-DRHEEWON-frontend.git) | [회고](https://velog.io/@leesegho/Dr.martens-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

## 인원

프론트엔드 4명 | 백엔드 1명

## Tech Stack

JavaScript(ES6) | React | React Router | Sass(SCSS)


## What did I do

### 상품 디테일 페이지 담당

- 상품 이미지를 확인하며, 사이즈와 수량 선택 후 장바구니에 담을 수 있습니다. 더 보기 버튼 클릭 시 추가 후기 목록을 불러옵니다.

### 캐러셀 [(자세한 내용 보러가기)](https://velog.io/@leesegho/%EC%BA%90%EB%9F%AC%EC%85%80%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C)

- 평소에도 불편함으로 느꼈던 세로 방향의 상품 이미지 나열 방식을 기술적으로 해결했습니다.
- position 값을 수정할 경우 reflow와 repaint가 발생하기 때문에 transform 속성의 translate를 사용하여 구현했습니다.
- 문제 해결 역량이 개발자의 필수 역량인 만큼, 문제를 발견하고 해결 방안을 기술적으로 녹여낸 소중한 경험이었습니다.

### 페이지네이션으로 상품 후기파트 구현 (버튼 클릭 시 3개씩 후기글 추가)

- 페이지가 렌더링 될 때 기본 후기 목록 3개를 받아옵니다.
- ‘더보기 버튼’ 클릭 시 API 호출을 할때 엔드포인트의 offset값을 변경하여 다음 3개의 후기를 더 받아오게 됩니다.
- 기존의 state인 comments 배열의 뒤로 붙여넣고 리렌더링 시켜 페이지네이션 구현했습니다.

## 구현영상

- 캐러셀 구조를 파악하고 scss @mixin 조건물을 활용하여 가독성을 높였습니다.

![2  슬라이더 구현](https://user-images.githubusercontent.com/93597794/159906356-36a70ea1-980c-496e-9c8c-1461a5d99315.gif)


- 수량에 따른 가격 변화 구현

![3  수량 가격 카운트](https://user-images.githubusercontent.com/93597794/159906467-7e3a8340-755d-4d55-9131-397bc3f69379.gif)


- 상품의 사이즈 정보를 받아 버튼 변화 구현

![4  사이즈 버튼 구현](https://user-images.githubusercontent.com/93597794/159906504-7e4101f5-1273-458e-866e-3ffbf1d7b625.gif)


- 페이지네이션으로 상품 후기파트 구현(버튼 클릭 시 3개씩 후기글 추가)

![5  댓글 더보기](https://user-images.githubusercontent.com/93597794/159906530-1047795b-6986-4406-95b3-80edb60b8b64.gif)

