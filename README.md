# CulturalEventProject 서버

CulturalEventProject의 REST API 이용 및 CORS 에러를 해결하기 위해 개발된 Express 서버입니다.

### 배포 Page

https://port-0-culturaleventapi-server-r8xoo2mles8gzra.sel3.cloudtype.app/

### 사용 기술

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>

### 개발 목적

- REST API 이용 및 CORS 에러 해결

### 개발 내용

- REST API 요청
  - Express로 REST API를 작성하여 프론트엔드와 백엔드가 HTTP 메소드로 통신할 수 있도록 하였습니다.
- 공공 API의 CORS 에러 해결
  - 서울시 문화행사의 공공 API를 받아오던 중 CORS 에러가 발생하였습니다.
  - TypeScript와 Express로 API 데이터를 받아오는 서버를 만들고, Express의 CORS 라이브러리를 이용하여 에러를 해결했습니다.
  - 이렇게 받아온 API 데이터를 프론트엔드에서 가져갈 수 있도록 페이지로 배포하였습니다.
