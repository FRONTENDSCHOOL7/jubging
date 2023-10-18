# final-06-jubging

## 0. 목차

2. [팀 소개](#2-👥-팀-소개)
3. [컨벤션](#3-convention)

## 2. 👥 팀 소개

|                                                                                    **김지헌**                                                                                    |                                                                                                  **서동주**                                                                                                  |                                                                                                **김하영**                                                                                                 |                                                                                            **정현지**                                                                                            |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                         <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/c2188ab9-6bcd-4679-a61b-85d55ddefb2e" height=180 >                         |                                       <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/3fa5a5a6-f1f0-42f9-9929-fbab7cd862c7" height=180 >                                       |                                     <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/f0ba2116-f617-4363-ad15-74e7b7c430d3" height=180 >                                      |                                 <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/80d59089-c7a9-402b-a5cf-964562c55981" height=180 >                                 |
| [🔗 GitHub](https://github.com/kkang123)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green) <br/> ![Team%20Leader](https://img.shields.io/badge/-Team%20leader-blue) | [🔗 GitHub](https://github.com/WestEastZ)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green) <br/> ![PM,Comunication%20Leader](https://img.shields.io/badge/-PM,%20Comunication%20leader-yellow) | [🔗 GitHub](https://github.com/hangnik)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green) <br/> ![Design,Technique%20Leader](https://img.shields.io/badge/-Design,Technique%20Leader-orange) | [🔗 GitHub](https://github.com/aicul313)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green) <br/> ![Development%20Leader](https://img.shields.io/badge/-Development%20Leader-purple) |

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 3. Convention

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
Title : git Emogi 구현 내용

---

name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''

---

# 📑 Description

설명을 작성해주세요.

# 📝 Todo

- [ ] todo 1
- [x] todo 2

# 📍 ETC

기타사항
```

- 브랜치 이름 : #이슈번호-기능이름

### ⚙️ PR Convention

```markdown
Title : git Emogi 작업 내용

# ⚡ PR 요약

<!-- ex) 회원가입 기능 구현-->

# 🔍 주요 변경 사항

<!-- 주요 변경사항 목록을 작성-->

# 💡 관련 이슈

Resolve #{이슈번호}
```

- pr 규칙
  - pr 올리면 공유하기
