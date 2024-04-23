# 1인 가구를 위한 인테리어 구매 사이트

이 프로젝트는 JavaScript를 사용하여 영화 검색 기능을 구현하는 것을 목표로 합니다. 사용자는 영화 제목을 검색하여 해당 영화의 정보를 확인할 수 있습니다.

## 구현 기능

- 로그인/회원가입:
  - 사용자는 회원가입을 생성할 때 bcrypt를 사용하여 비밀번호를 안전하게 저장하고 생성할 수 있습니다.
  - 회원가입한 사용자는 로그인하여 웹 사이트에 접속할 수 있습니다. 로그인 기능은 JWT(Json Web Token)를 사용하여 구현되었습니다.

- 메인페이지 리스트:
  - 애플리케이션의 메인페이지에서는 인기 있는 제품이 표시됩니다.
  - 애플리케이션의 메인페이지에서는 인기 있는 영화 목록이 표시됩니다. 이때 데이터베이스에서 가져오는 영화 목록에는 limit을 걸어서 로딩 시간을 최적화하였습니다.


- 결제하기:
  - 사용자는 장바구니에 담긴 상품을 선택하여 결제할 수 있습니다.
  - 사용자는 회원가입할 때 포인트를 받아 결제에 사용할 수 있습니다. 이를 통해 사용자는 포인트를 사용하여 결제를 할 수 있으며, 추가로 결제가 필요할 경우 다른 결제 수단을 사용할 수 있습니다.


- 장바구니 담기:
  - 사용자는 상품 상세 페이지에서 원하는 상품을 장바구니에 담을 수 있습니다.
  - 장바구니에 담긴 상품은 언제든지 확인하고 수정할 수 있습니다.

- 리뷰 CRUD:
  - 사용자는 영화나 상품에 대한 리뷰를 작성하고 게시할 수 있습니다.
  - 작성된 리뷰는 다른 사용자들에게 공개되며, 필요에 따라 수정하거나 삭제할 수 있습니다.


## 사용된 기술

<div align="center"><h2>🔧기술 스택</h2></div>
</br>
<div align="center">FRONTEND</div>
<div align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
</div>
</br>
<div align="center">BACKEND</div>
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  
</div>
</br>
<div align="center">CO-OP TOOLS</div>
<div align="center">  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
  <a href="https://www.figma.com/file/Phdi4zHwhyDcAekaz7AJuN/Untitled?type=design&node-id=0%3A1&mode=design&t=zs6cMceeNlEBAYrg-1"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/></a>
</div>

![프로젝트 구현 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Feu0yyu%2FbtssP7SruOa%2F27IOuIhOlfUdgwtn1cTgZK%2Fimg.png)

![프로젝트 구현 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWucLx%2FbtssPxp49Dg%2FUgPDmFQh9SrkeUmIJJjqT0%2Fimg.png)

![프로젝트 구현 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl3RSC%2FbtssSCYZIVw%2FzDDvKYhrLT1IT3yGxm1fB1%2Fimg.png)
