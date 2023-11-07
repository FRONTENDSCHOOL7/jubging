# final-06-jubging

## 0. 목차

2. [팀 소개](#2-👥-팀-소개)
3. [컨벤션](#3-convention)

## 2. 👥 팀 소개

|                                                            **김지헌**                                                            |                                                            **서동주**                                                            |                                                            **김하영**                                                            |                                                            **정현지**                                                            |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/6494887b-2c19-443e-afae-52604fa7cb77" height=180 > | <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/30458ecc-e656-4ec1-b106-738b521eed2e" height=180 > | <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/487afe48-8f88-4815-997a-c9563931de06" height=180 > | <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/c4e82a04-7a19-41bb-9aa8-413bb0c282c1" height=180 > |
|             [🔗 GitHub](https://github.com/kkang123)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)              |             [🔗 GitHub](https://github.com/WestEastZ)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)             |              [🔗 GitHub](https://github.com/hangnik)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)              |             [🔗 GitHub](https://github.com/aicul313)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)              |

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 3. Convention

### ⚙️ Code Convention

### prettier

```
{
  "bracketSpacing": true, // 객체 리터럴에서 괄호에 공백 삽입
  "jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  "jsxSingleQuote": true, // JSX에 홑따옴표 사용 여부
  "semi": true, // 세미콜론 사용 여부
  "printWidth": 80, // 줄 바꿈 할 폭 길이
  "useTabs": false, // 탭 사용 여부
  "tabWidth": 2, // 탭 너비
  "arrowParens": "always" // 화살표 함수 괄호 사용 여부
}
```

### ⚙️ Git Commit Convention

- 커밋 메시지에 이슈 번호 남기기 → 해당 이슈에 커밋 내역이 자동으로 남겨짐

| Emoji | Type        | 설명                                                                                        | 예시                                           |
| ----- | ----------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 🐛    | FIX         | 버그, 오류 해결                                                                             | ex) 🐛 #10 - callback error                    |
| 📝    | ADD         | 문서 생성 / 수정                                                                            | ex) 📝 #11 - LoginActivity                     |
| ✨    | FEAT        | 새로운 기능 구현                                                                            | ex) ✨ #11 - google login                      |
| 🔥    | DEL, REMOVE | 코드 / 파일 삭제                                                                            | ex) 🔥 #12 - 중복 파일 삭제                    |
| ♻️    | REFACTOR    | 코드 리팩토링, 세미콜론 줄바꿈 포함                                                         | ex) ♻️ #15 - MVP architecture to MVVM          |
| 🚚    | CHORE       | 그 이외의 잡일/ 버전 코드 수정, 패키지 구조 변경, 파일 이동, 가독성이나 변수명, reformat 등 | ex) 🚚 #20 - delete unnecessary import package |
| 💄    | DESIGN      | UI 같은 스타일 내용을 추가하거나 업데이트                                                   | ex) [💄] #25 - 회원가입 레이아웃 조정          |
| 💡    | COMMENT     | 필요한 주석 추가 및 변경                                                                    | ex) [💡] #27 - 메인 뷰컨 주석 추가             |
| ✅    | TEST        | 테스트 코드 추가                                                                            | ex) ✅ #28 - 로그인 토큰 테스트 코드 추가      |
| 🍻    | BEER        | 술 취해서 쓴 코드                                                                           | ex) 🍻 #30                                     |

### ⚙️ Issue Convention

```markdown
<!-- Title : git Emogi 구현 내용 -->

# 📑 Description

설명을 작성해주세요.

# 📝 Todo

- [ ] todo 1
- [x] todo 2

# 📍 ETC

기타사항
```

- 브랜치 이름 : `#이슈번호-기능이름`

### ⚙️ PR Convention

```markdown
<!-- Title : git Emogi 작업 내용 -->

# ⚡ PR 요약

<!-- ex) 회원가입 기능 구현 -->

# 🔍 주요 변경 사항

<!-- 주요 변경사항 목록을 작성 -->

# 💡 관련 이슈

Resolve {#이슈번호}
```

### 📦 폴더 구조

```
🏃 jubging
├─ 📦 public
│  └─ 📄 index.html
├─ 📦 src
│  ├─ 📂 api
│  ├─ 📂 assets
│  │  ├─ 📂 fonts
│  │  ├─ 📂 icon
│  │  └─ 📂 images
│  ├─ 📂 components
│  │  ├─ 📂 common
│  │  │  ├─ 📂 Alert
│  │  │  ├─ 📂 Button
│  │  │  ├─ 📂 ChatList
│  │  │  ├─ 📂 Header
│  │  │  ├─ 📂 Input
│  │  │  ├─ 📂 Modal
│  │  │  ├─ 📂 Navbar
│  │  │  ├─ 📂 Profile
│  │  │  └─ 📂 UserList
│  │  ├─ 📂 kakaomap
│  │  ├─ 📂 Post
│  │  │  ├─ 📂 PostFooter
│  │  │  ├─ 📂 PostHeader
│  │  │  ├─ 📂 PostMain
│  │  │  ├─ 📄 NewsPosting.jsx
│  │  │  └─ 📄 Posting.jsx
│  │  ├─ 📂 Splash
│  │  │  ├─ 📂 Character
│  │  │  └─ 📂 Frame
│  ├─ 📂 context
│  ├─ 📂 hooks
│  ├─ 📂 pages
│  │  ├─ 📂 AddCourse
│  │  ├─ 📂 Chat
│  │  ├─ 📂 ChatList
│  │  ├─ 📂 CourseDetail
│  │  ├─ 📂 Follow
│  │  │  └─ 📂 FollowList
│  │  ├─ 📂 Home
│  │  ├─ 📂 Loading
│  │  ├─ 📂 Login
│  │  ├─ 📂 NewsLetter
│  │  ├─ 📂 NotFound
│  │  ├─ 📂 Post
│  │  ├─ 📂 Profile
│  │  ├─ 📂 Search
│  │  ├─ 📂 Sign
│  │  ├─ 📂 SplashScreen
│  │  └─ 📂 Upload
│  │  ├─ 📂 recoil
│  │  ├─ 📂 Postroutes
│  │  ├─ 📂 Poststyles
│  |  ├─ 📄 App.js
│  |  ├─ 📄 index.js
│  |  ├─ 📄 .gitignore
│  |  ├─ 📄 package-lock.json
│  |  ├─ 📄 package.json
│  |  └─ 📄 README.md
```
