// import React from "react";
// import { useParams } from "react-router-dom";
// import bear from "../../../assets/images/bear-face.svg";

// import {
//   ProfileLink,
//   Image,
//   Section,
//   UserName,
//   SubText,
// } from "./UserListBoxStyle";

// export default function UserListBox({
//   profileImage,
//   userName,
//   accountName,
//   children,
// }) {
//   return (
//     <ProfileLink to={`/profile/${accountName}`}>
//       <Image $image={profileImage}></Image>
//       <Section>
//         {/* 기능 구현 시 변수로 교체 */}

//         <UserName>{userName}</UserName>
//         <SubText>{accountName}</SubText>
//       </Section>
//     </ProfileLink>
//   );
// }

import React, { useState } from "react";
import { useParams } from "react-router-dom";

import baseprofile from "../../../assets/icons/baseprofile.svg";

import {
  Maindiv,
  ProfileLink,
  ImageDiv,
  Section,
  UserName,
  SubText,
} from "./UserListBoxStyle";

export default function UserListBox({
  profileImage,
  userName,
  accountName,
  inputTxt,
}) {
  const [image, setImage] = useState(profileImage);

  const handleError = () => {
    setImage(baseprofile);
  };

  return (
    <ProfileLink to={`/profile/${accountName}`}>
      <Maindiv>
        <ImageDiv>
          {/* 요 부분이 검색창 프로필에 baseprofile 전체 할당 */}
          <img src={image} onError={handleError} alt="Profile" />
        </ImageDiv>
        <Section>
          <UserName>
            {userName
              .split(new RegExp(`(${inputTxt})`, "i"))
              .map((part, index) =>
                part.toLowerCase() === inputTxt.toLowerCase() ? (
                  <span key={index} style={{ color: "#40A6DE" }}>
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
          </UserName>
          <SubText>
            {accountName
              .split(new RegExp(`(${inputTxt})`, "i"))
              .map((part, index) =>
                part.toLowerCase() === inputTxt.toLowerCase() ? (
                  <span key={index} style={{ color: "#40A6DE" }}>
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
          </SubText>
        </Section>
      </Maindiv>
    </ProfileLink>
  );
}
