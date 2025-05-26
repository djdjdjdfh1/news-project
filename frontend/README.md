## 📰 뉴스 검색 웹사이트 (학습용 프로젝트)

키워드 기반 뉴스 검색 및 표시 기능을 구현한 프론트엔드 + 백엔드 협업 프로젝트입니다.

<br>

## 🧑‍🧑‍🧒‍🧒 팀원

<table>
  <tbody>
    <tr>
      <td align="center"><a href="#"><img src="https://avatars.githubusercontent.com/u/125442106?v=4" width="100px;" alt=""/><br /><sub><b>FE :  hoi</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href="#"><img src="https://avatars.githubusercontent.com/u/125442251?s=96&v=4" width="100px;" alt=""/><br /><sub><b>BE : djdjdjdfh1
</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br>

## ⚙️ 기술 스택

### ✔️ Frond-end

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### ✔️ Back-end

<img src="https://img.shields.io/badge/fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=green"> <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=yellow">

<br>

## 🔍 주요 기능

- 검색어 입력을 통한 뉴스 조회
- 리스트 기반 뉴스 UI 구성
- 프론트엔드와 백엔드 간 API 통신 구현 (RESTful)
- 추천 키워드 버튼 클릭으로 바로 검색 가능

<br>

## 🐈 실행 방법

<b>📦 백엔드 실행 (FastAPI)</b>

```
cd backend
uvicorn app.main:app --reload
```

<b>💻 프론트엔드 실행 (Vite + React)</b>

```
cd frontend
npm install
npm run dev
```

프론트: http://localhost:5173
<br>
백엔드: http://localhost:8000

<br>

## 🖥️ 화면 구성

  <table>
    <tr>
      <th scope="col"><b>메인 페이지</b></td>
    </tr>
    <tr>
      <td><img width="500" alt="image" src="https://github.com/user-attachments/assets/7f4ef6f1-1110-4215-9fb6-b35e9c5854b1" /></td>
    </tr>
  </table>

<br>

## 📚 프로젝트 목적

- 프론트엔드와 백엔드 협업 기반의 실습 경험
- 외부 뉴스 API(RSS) 활용 방식 학습
- API 데이터를 바탕으로 화면 구성 및 상태 관리
- Tailwind CSS 기반 UI 설계 연습
- 검색 키워드 전달 및 URL 파라미터 처리 경험

<br>

## 📎 기타 정보

- 본 프로젝트는 실제 서비스 목적이 아닌 학습용으로 제작되었습니다.
- 뉴스 요약 기능 없이, RSS에서 제공되는 요약(description)을 그대로 사용합니다.
- FastAPI에서 제공하는 단일 검색 API(/search)를 기반으로 모든 화면 구현
- 정적 데이터 없이 실시간 검색어 기반으로 화면 구성
