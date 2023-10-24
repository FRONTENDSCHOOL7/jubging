// import styled from "styled-components";
// import baseprofile from "../../../assets/icons/baseprofile.svg";
// import profileicon from "../../../assets/icons/icon-photo.svg";

// export const UserImage = styled.img.attrs({
//   src: baseprofile,
// })`
//   /* margin: 30px 103px 35px; */
//   margin-top: ${(props) => (props.$tmargin ? props.$tmargin : "")};
//   margin-left: ${(props) => (props.$lmargin ? props.$lmargin : "")};
//   margin-right: ${(props) => (props.$rmargin ? props.$rmargin : "")};
//   margin-bottom: ${(props) => (props.$bmargin ? props.$bmargin : "")};
//   width: 110px;
//   height: 110px;
//   border-radius: 50%;
// `;

// export const ImageButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${profileicon});
//   background-repeat: no-repeat;
//   background-position: center center;
//   width: 10px;
//   height: 10px;
// `;

import styled from "styled-components";
import baseprofile from "../../../assets/icons/baseprofile.svg";
import profileicon from "../../../assets/icons/icon-photo.svg";

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block; /* 이 부분은 필요에 따라 변경 가능합니다 */
`;

export const UserImage = styled.img.attrs({
  src: baseprofile,
})`
  margin-top: ${(props) => (props.$tmargin ? props.$tmargin : "")};
  margin-left: ${(props) => (props.$lmargin ? props.$lmargin : "")};
  margin-right: ${(props) => (props.$rmargin ? props.$rmargin : "")};
  margin-bottom: ${(props) => (props.$bmargin ? props.$bmargin : "")};
  width: 110px;
  height: 110px;
  border-radius: 50%;
  z-index: 50;
`;

export const ImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${profileicon});
  background-repeat: no-repeat;
  background-position: center center;
  width: 36px;
  height: 36px;
  position: absolute; // 상위 엘리먼트인 ImageContainer에 대해 절대적으로 위치가 결정됩니다.
  bottom: 35px; // 이미지 버튼의 위치 조절
  right: 103px; // 이미지 버튼의 위치 조절
  z-index: 99;
`;
