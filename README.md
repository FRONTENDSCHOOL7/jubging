# final-06-jubging

## 0. 목차

1. [서비스 소개](#1-🏃서비스-소개)
2. [팀 소개](#2-👥-팀-소개)
3. [프로젝트 기간](#3-📅-프로젝트-기간)
4. [기술 및 개발 환경](#4-⚒️-기술-및-기술-환경)
5. [협업 환경](#5-🤝-협업-환경)
6. [역할 분담](#6-👨‍🎓-역할-분담)
7. [UI](#7-🎨-ui)
8. [구현 기능](#8-✨-구현-기능)
9. [주요 코드](#9-🌟-주요-코드)
10. [폴더 구조](#10-📦-폴더-구조)
11. [리팩토링 할 부분](#11-♻️-리팩토링-할-부분)
12. [회고 및 소감](#12-🩵-회고-및-소감)

## 1. 🏃서비스 소개

![Shot](https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/16502292-4f77-4f35-94a6-a60ae608dcdd)

줍깅은 **플로깅 경험을 공유하고, 플로깅 추천 코스를 공유**하는 SNS 플랫폼입니다.
'(쓰레기를) 줍다'와 '조깅(jogging)'을 합친 '줍깅'은 흔히 플로깅이라고도 불리우며, 환경 보호와 건강한 라이프스타일을 동시에 추구하는 컨셉을 가지고 있습니다.

- Follower, Following 기능을 활용해, 친구를 맺은 사용자들은 자신의 플로깅 경험을 기록하여 공유하고, 친구의 플로깅 경험도 느낄 수 있습니다.
- 자신의 홈 피드에서 팔로우한 사람의 게시글을 확인할 수 있고, 댓글과 좋아요 기능을 통해 서로 소통할 수 있습니다.
- 본인이 경험한 좋은 플로깅 코스를 공유할 수 있어 더 효율적인 플로깅 활동을 위한 데이터를 제공합니다. 본인의 플로깅을 공유하고 타인의 플로깅을 경험함으로써 환경 보호에 대한 인식을 높일 수 있습니다.

🏃 줍깅을 통해 플로깅 경험을 공유하며 소통해보세요💚

🏃 [배포 URL](https://jubging.netlify.app/)

```
🏃 줍깅 테스트 계정
ID : jubging@gmail.com
PW : asd123
```

## 2. 👨‍👩‍👧‍👦 팀 소개

|                                                            **김지헌**                                                            |                                                            **서동주**                                                            |                                                            **김하영**                                                            |                                                            **정현지**                                                            |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/6494887b-2c19-443e-afae-52604fa7cb77" height=180 > | <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/30458ecc-e656-4ec1-b106-738b521eed2e" height=180 > | <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/487afe48-8f88-4815-997a-c9563931de06" height=180 > | <img src="https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85389685/c4e82a04-7a19-41bb-9aa8-413bb0c282c1" height=180 > |
|             [🔗 GitHub](https://github.com/kkang123)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)              |             [🔗 GitHub](https://github.com/WestEastZ)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)             |              [🔗 GitHub](https://github.com/hangnik)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)              |             [🔗 GitHub](https://github.com/aicul313)<br/> ![Frontend](https://img.shields.io/badge/-Frontend-green)              |

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 3. 📅 프로젝트 기간

🏃2023.10.16 ~ 2023.11.08

- 개발 일정은 노션의 [간트 차트](https://www.notion.so/6-0e7366cc5ba3456eb1512ef6bfee7348?pvs=4)를 통해 관리하였습니다.

![일정](https://user-images.githubusercontent.com/85664676/281305095-b0d57eba-ce8e-44a5-8d3f-bdce8324f871.jpg)

| 주차                             | 작업 내용                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **사전 모임**<br>(10/12 ~ 10/13) | - 주제 선정 및 구조도 작성<br>- API 명세 파악                                                                                              |
| **1주차**<br>(10/16 ~ 10/22)     | - 프로젝트 기초 셋팅 및 폴더 구조 설정<br> - 컨벤션 및 Issue, PR 템플릿 설정<br>- Figma를 통해 와이어프레임 및 UI 제작                     |
| **2주차**<br>(10/23 ~ 10/29)     | - 공통 컴포넌트 제작<br>- 각 맡은 페이지 마크업 & 스타일링 구현<br>- 페이지 단위 별로 필수 기능 구현 (로그인, 회원가입, 게시글, 프로필 등) |
| **3주차**<br>(10/30 ~ 11/5)      | - 페이지 단위 2차 기능 구현 (코스 등록, 댓글)<br>- 추가기능 구현 (좋아요, 검색, 팔로우)                                                    |
| **4주차**<br>(11/6 ~ 11/8)       | - 버그 수정 및 리팩토링<br>- 배포 (Netlify)<br>- README 작성                                                                               |

## 4. ⚒️ 기술 및 기술 환경

### 기술스택

<table>
<tr>
 <td align="center" width="100px">사용 기술</td>
 <td width="800px">
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/styled-components-DB7098?style=flat&logo=styled-components&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=Recoil&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/axios-7F2B7B?style=flat&logo=axios&logoColor=FFFFFF"> 
 <img src="https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=ReactRouter&logoColor=white"/>
    </td>
</tr>
<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=NPM&logoColor=ffffff"/>
  </td>
</tr>
<tr>
 <td align="center">포맷터</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=flat&logo=Prettier&logoColor=ffffff"/>

 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/Notion-FEFEFE?style=flat&logo=Notion&logoColor=000000"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=FFFFFF"/> 
 </td>
 <tr>
  <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=FFFFFF"/>
 </td>
</tr>
<tr>
  <td align="center">API</td>
 <td>
 <img src="https://img.shields.io/badge/제공된 BackEnd API-green?style=flat"/>
    <img src="https://img.shields.io/badge/kakao API-yellow?style=flat&logo=kakao&logoColor=FFFFFF"/>

 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual%20Studio%20Code&logoColor=white"/>
</tr>
</table>

#### Recoil 활용 : 원자적 상태 관리와 React와의 친화성

```
· 전역 상태를 독립적으로 관리할 수 있어 효율적인 협업 환경을 구축하기 위해 사용했습니다.
· React의 핵심 개념과 잘 어울리는 API를 제공하기 때문에 React를 배운지 얼마 안 된 팀원들도 Recoil에 어렵지 않게 적응할 수 있었습니다.
```

#### Axios 활용 : 비동기 요청 처리와 전역 설정 용이성

```
· Promise 기반의 API를 제공하기 때문에 비동기 요청을 보다 간결하고 직관적으로 처리하기 위해 사용했습니다.
· 전역적으로 설정할 수 있는 기능을 통해 기본 URL, 헤더 등을 한 곳에서 설정하고 관리하였습니다.
· Interceptor 기능을 통해 모든 요청이나 응답에 공통적으로 적용해야 하는 토큰 인증, 에러 처리 등과 같은 로직을 중앙에서 관리하였습니다.
```

#### CustomHook 활용 : 사용자 입력 및 스크롤 제어

```
ⅰ useDebounce Hook
  · 사용자의 연속적인 입력을 제어하기 위해 생성한 Hook
  · 입력이 끝날 때까지 기다린 후, 해당 값을 반환하여 불필요한 API 호출을 줄이기 위해 사용했습니다.

ⅱ useScrollTop Hook
  · 스크롤 위치 초기화
  · 라우팅 간 페이지 전환 시 스크롤 위치를 페이지 상단으로 초기화하여, 사용자가 새로운 페이지의 내용을 볼 수 있도록 했습니다.
```

#### React-Portal 활용 : 모달 컴포넌트 외부 렌더링 관리

```
· 모달 컴포넌트를 루트 외부에 렌더링 하여 CSS 스타일링과 이벤트 버블링에서 자유롭게 작업하기 위해 사용했습니다.
```

## 5. 🤝 협업 환경

### ⚙️ Convention

팀원 간의 원활한 소통과 협업을 위해 prettier와 커밋 컨벤션을 지정하였습니다.

- Prettier Convention

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

- Git Commit Convention

| Emoji | Type        | 설명                                                                                        | 예시                                     |
| ----- | ----------- | ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 🐛    | FIX         | 버그, 오류 해결                                                                             | ex) 🐛 callback error                    |
| 📝    | ADD         | 문서 생성 / 수정                                                                            | ex) 📝 LoginActivity                     |
| ✨    | FEAT        | 새로운 기능 구현                                                                            | ex) ✨ google login                      |
| 🔥    | DEL, REMOVE | 코드 / 파일 삭제                                                                            | ex) 🔥 중복 파일 삭제                    |
| ♻️    | REFACTOR    | 코드 리팩토링, 세미콜론 줄바꿈 포함                                                         | ex) ♻️ MVP architecture to MVVM          |
| 🚚    | CHORE       | 그 이외의 잡일/ 버전 코드 수정, 패키지 구조 변경, 파일 이동, 가독성이나 변수명, reformat 등 | ex) 🚚 delete unnecessary import package |
| 💄    | DESIGN      | UI 같은 스타일 내용을 추가하거나 업데이트                                                   | ex) 💄 회원가입 레이아웃 조정            |
| 💡    | COMMENT     | 필요한 주석 추가 및 변경                                                                    | ex) 💡 메인 뷰컨 주석 추가               |
| ✅    | TEST        | 테스트 코드 추가                                                                            | ex) ✅ 로그인 토큰 테스트 코드 추가      |

### ⚙️ Issue 및 PR template

빠르고 간편한 Issue 및 PR 생성을 위해 template을 적용하였습니다.

- Issue

```markdown
# 📑 Description

설명을 작성해주세요.

# 📝 Todo

- [ ] todo 1
- [x] todo 2

# 📍 ETC

기타사항
```

- Pull Request

```markdown
# ⚡ PR 요약

PR 내용을 요약하여 작성해주세요.

# 🔍 주요 변경 사항

- 주요 변경사항 목록을 작성

# 💡 관련 이슈

Resolve {#이슈번호}
```

### 📅 Github Projects

깃허브에서 제공하는 칸반보드를 사용해 프로젝트 진행 상황을 한 눈에 확인할 수 있어 일정 관리에 수월했습니다.

![](https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/97607752/394919d9-dadd-4c9a-9654-3fb79b4f0e3e)

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 6. 👨‍🎓 역할 분담

![Shot](https://user-images.githubusercontent.com/85664676/281498676-e881c6b5-7354-4a60-89fe-db985c50758a.png)

## 7. 🎨 UI

👉[피그마 링크](https://www.figma.com/file/zfQIRSnEmTi1HDgcDQqkHG/6%EC%A1%B0-%7C-%EC%8B%9D%EC%8A%A4%EC%84%BC%EC%8A%A4---%EC%A4%8D%EA%B9%85?type=design&node-id=0-1&mode=design&t=sJld9KGQg5U0YTm8-0)

![UI](https://user-images.githubusercontent.com/85664676/281501760-ab0a7a5a-6aa5-441f-95ee-35518f2dd4db.png)

## 8. ✨ 구현 기능

<!-- 위키 링크 연결 -->

|                                                     스플래쉬                                                     |                                                     로그인                                                      |                                                     회원가입                                                     |
| :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![splash](https://user-images.githubusercontent.com/85389685/281055117-714f1e22-781e-4033-8de1-c5a82e7174b8.gif) | ![login](https://user-images.githubusercontent.com/85664676/281309011-f9770967-89ee-4496-80f4-653a8cce8e91.gif) | ![signup](https://user-images.githubusercontent.com/85664676/281296298-3d7b8be2-487e-427f-8551-b0b2ec18ec59.gif) |

|                                                      404                                                      |                                                    계정 검색                                                     |                                                   팔로워&팔로잉                                                    |
| :-----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| ![404](https://user-images.githubusercontent.com/85664676/281056181-86f8d417-3914-4469-a6bb-9c2eb722253d.gif) | ![search](https://user-images.githubusercontent.com/85664676/281056219-c36c7819-fc5b-4f71-8138-95f10ccee288.gif) | ![follower](https://user-images.githubusercontent.com/85664676/281222104-7daa9648-84fb-4946-bf9b-38c608bdc8a3.gif) |

|                                                       홈                                                       |                                                       뉴스레터                                                       |                                                     좋아요                                                     |
| :------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![home](https://user-images.githubusercontent.com/85664676/281222596-fad1c93a-4446-4cc9-bd23-458f9d5b4e8f.gif) | ![newsletter](https://user-images.githubusercontent.com/85664676/281056287-27654302-c8e6-4fe8-af6c-3459aecfc6ec.gif) | ![like](https://user-images.githubusercontent.com/85664676/281222045-19f92cad-a2b4-450e-8777-cc179dd6372a.gif) |

|                                                       댓글 등록                                                        |                                                      댓글 삭제/신고                                                      |                                                         채팅                                                         |
| :--------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| ![comment_more](https://user-images.githubusercontent.com/85664676/281056380-f553acb5-6f5d-4b1f-80a4-395bb30480e2.gif) | ![comment_delete](https://user-images.githubusercontent.com/85664676/281056341-11f1a66e-1c06-4c47-811a-209078d7c566.gif) | ![채팅](https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85664676/9c93a44c-1d2b-4d63-b1b9-94f6fba11ab1) |

|                                                        게시글 등록                                                        |                                                                    게시글 수정/삭제                                                                     |                                                 코스 등록/상세 보기                                                 |
| :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| ![게시글_등록](https://user-images.githubusercontent.com/85664676/281056272-21370767-3216-4f50-9879-340964bce833.gif) | ![게시글 사진 삭제 수정 삭제](https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85664676/449248d3-1cb5-453e-8e35-edb5d95f0482) | ![코스_등록](https://user-images.githubusercontent.com/85664676/281222077-77a905ed-c7cf-455a-bdc9-41f9648b0644.gif) |

|                                                      프로필 수정                                                      |                                                                계정 신고/공유,게시글 신고                                                                |                                                      로그아웃                                                      |
| :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| ![프로필_수정](https://user-images.githubusercontent.com/85664676/281222113-05fd1ba6-9c8b-4ae7-a1bd-75175143116b.gif) | ![상대방 프로필, 게시글 신고 공유](https://github.com/FRONTENDSCHOOL7/final-06-jubging/assets/85664676/7d9733ff-884c-4713-abcc-6c46b9605322) | ![로그아웃](https://user-images.githubusercontent.com/85664676/281056395-cc12b2ae-935d-44a7-9455-f58d8c710be8.gif) |

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 9. 🌟 주요 코드

<details>
<summary>kakao Map API & react-kakao-maps-sdk</summary>
<div>

카카오 맵 API와 React 카카오 지도 라이브러리를 함께 사용했고 사용자의 편의성을 위하여 실시간 위치 정보를 불러오는 기능을 추가하였습니다.

또한, 그려진 지도 안에 경로의 선을 기준으로 사용자에게 경로를 보여주게하기 위해 선들의 시작점과 끝점을 기준으로 중신 좌표값을 구하여 적용하였습니다.

제한적인 백엔드 API 때문에 이미지를 가져오는 부분을 해결하기 위해서 지도와 선의 정보를 JSON.stringify를 사용하여 문자열 데이터로 변환시켰고 데이터 통신 이후 JSON.parse로 객체화하여 지도와 선을 다시 나타내었습니다.

```jsx
const drawLineOnNewMap = () => {
  if (clickPosition) {
    const container = document.getElementById("newMap");

    // 선의 시작점, 중간점, 끝점 계산
    const options = {
      draggable: false,
      zoomable: false,
      isableDoubleClick: false,
      disableDoubleClickZoom: false,
      center: clickPosition,
      center: new kakao.maps.LatLng(centerLat, centerLng),
      level: 6,
    };

    // 지도 생성
    const newMap = new kakao.maps.Map(container, options);

    // 선 생성
    new kakao.maps.Polyline({
      map: newMap,
      path: linePoints,
      strokeWeight: 3,
      strokeColor: "#db4040",
      strokeOpacity: 1,
      strokeStyle: "solid",
    });

    // 지도 데이터
    const mapState = {
      center: {
        lat: newMap.getCenter().getLat(),
        lng: newMap.getCenter().getLng(),
      },
      level: newMap.getLevel(),
    };

    // 선 데이터
    const linePointsData = linePoints.map((point) => ({
      lat: point.getLat(),
      lng: point.getLng(),
    }));

    // 선 데이터 문자열화
    const stringifylinePointsData = JSON.stringify(linePointsData);

    // 지도 데이터 문자열화
    const serialized = JSON.stringify(mapState);

    // 지도 종합 데이터
    const mapInfo = {
      map: serialized,
      line: stringifylinePointsData,
    };

    // 상태 업데이트 및 사용자를 새로운 경로로 이동시키고, mapInfo 객체를 state에 담아 전달
    setMapInfo(mapInfo);
    navigate(`/profile/${userInfo.accountname}/addcourse`, {
      state: { data: mapInfo },
    });
  }
};

// 상세 페이지 지도 나타내기
useEffect(() => {
  if (location.state.data) {
    const container = document.getElementById("newMap");

    // 지도 정보 객체화
    const mapInfo = JSON.parse(location.state.data.map);

    // 선 정보 객체화
    const lineInfo = JSON.parse(location.state.data.line);

    // 지도 중간 지점
    const center = new kakao.maps.LatLng(
      mapInfo.center.lat,
      mapInfo.center.lng
    );

    const options = {
      // 생략
    };

    // 지도 생성
    const newMap = new kakao.maps.Map(container, options);

    // 선 생성
    const linePointsLatLng = lineInfo.map(
      (point) => new kakao.maps.LatLng(point.lat, point.lng)
    );

    new kakao.maps.Polyline({
      //  생략
    });
  }
}, [location.state.data]);

// 프로필 페이지로 지도 데이터 전송 이동
const handleSubmitMap = async (event) => {
  event.preventDefault();

  const mapData = {
    product: {
      itemName: courseName,
      price: parseInt(courseLength),
      link: courseReview,
      itemImage: JSON.stringify(location.state.data),
    },
  };

  const response = await postCourseUpload(mapData);
  response && navigate(`/profile/${userInfo.accountname}`);
};
```

</div>
</details>

<br>

## 10. 📦 폴더 구조

```
🏃 jubging
├─ 📦 public
│  ├─ 📄 favicon.ico
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
│  │  ├─ 📂 Splash
│  ├─ 📂 context
│  ├─ 📂 hooks
│  ├─ 📂 pages
│  │  ├─ 📂 AddCourse
│  │  ├─ 📂 Chat
│  │  ├─ 📂 ChatList
│  │  ├─ 📂 CourseDetail
│  │  ├─ 📂 Follow
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
│  ├─ 📂 recoil
│  ├─ 📂 routes
│  ├─ 📂 styles
│  ├─ 📄 App.js
│  ├─ 📄 index.js
│  ├─ 📄 .gitignore
│  ├─ 📄 package-lock.json
│  ├─ 📄 package.json
│  └─ 📄 README.md
```

## 11. ♻️ 리팩토링 할 부분

- 아직 구현하지 못한 코스 등록 수정 기능 구현
- 중복적으로 사용되는 컴포넌트 재사용성 높이기
- 반응형 작업(pc, 태블릿) 및 시맨틱 태그를 사용한 웹접근성 향상
- 이미지 압축 및 Sprite 기법, Lazy-loading을 활용하여 이미지 렌더링 속도 향상
- UI 개선을 통해 사용자에게 좀 더 친절한 UX 제공
- useMemo, useRef 등 리액트 훅을 사용하여 재렌더링 방지

## 12. ❤️ 회고 및 소감 ❤️

### 김지헌

리액트 프로젝트가 처음이라 어려웠지만 이번 기회를 통해 한층 더 성장했다는 느낌과 아직은 부족한 점이 매우 많다는 걸 느꼈습니다.최대한 맡은 부분은 해결할려고 노력한거에 비해 미흡한 부분이 많아 아쉽지만 그래도 팀원들과 함께하여서 어려운 내용을 해결했던 기억과 구현을 성공하여 결과물이 나왔을 때 기쁨의 잊을 수 없을거 같습니다. 프로젝트 기간동안 고생한 팀원들에게 감사드립니다.

### 김하영

리액트 프로젝트가 처음이라 초반에 어떻게 진행해야할지 많이 어려웠지만, 팀원들과 같이 공부하면서 많이 배울 수 있었습니다. 또한 깃허브의 여러 기능을 사용하면서 체계적인 협업을 경험해봐서 좋았고 아직 프로젝트가 미완성이지만 끝이 아니기 때문에 앞으로도 리팩토링 하면서 더 좋은 결과물을 만들어내고 싶습니다. 끝까지 열심히 함께해준 팀원분들, 항상 친절하게 도움주셨던 멘토님과 강사님들 그리고 많은 의지가 된 회고 11조분들 모두 감사합니다!

### 정현지

리액트 공부를 시작한지 얼마 안 돼서 지식이 부족한 상태로 프로젝트를 시작하게 되어 많은 걱정을 했습니다 예상했던 대로 모르는 것이 많았고, 본의 아니게 팀원들에게 부담을 주면서조금 괴롭히게 된 것 같아 죄송스러웠습니다 그럼에도 팀원들이 도와주신 덕분에 프로젝트를 마무리 할 수 있게 되었습니다 또, 혼자 했다면 어떻게 시작해야 했을지도 몰랐을 Git, 컨벤션, Git Issue, PR 등 체계적인 협업 과정을 배울 수 있는 경험이 된 것 같아 좋았습니다. 조금씩 완성되는 모습을 보며, 나도 무언가 할 수 있게 된 것 같아서 조금 기뻤습니다 소중하고 감사한 경험을 함께 해준 팀원들에게 깊은 고마움을 표현하고 싶습니다 감사합니다 🔥

### 서동주

프론트엔드 스쿨을 시작하기 전 프로젝트 경험과 협업 경험이 전무하였습니다. 하지만 해당 과정을 통해 2가지의 목표를 달성하였고 좋은 경험이 되었습니다. 또한 완성도 높고 만족스러운 결과를 만들지 못하였지만 과정 속에서 다양한 시도를 통하여 배움을 얻을 수 있었습니다. 이러한 배움을 통해 리펙토링 기간에 더 질적인 결과를 얻을 수 있도록 노력하겠습니다. 마지막으로 1달의 시간동안 같이 고생한 팀원들과 프론트엔드 스쿨에서 만난 모든 분들에게도 감사드립니다.

<p align="right"><a href="#top">(🔼 Top)</a></p>
