import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { postSignUp } from "../../api/signupAPI";

import UserProfile from "../../components/common/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import { Title, Form, Selfchange } from "./ProfileStartStyle";
import Button from "../../components/common/Button/ButtonContainer";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

const ProfileStart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");

  const username = location.state.username;
  const password = location.state.password;
  const email = location.state.email;
  const accountname = location.state.accountname;

  const handleProfileSignup = async (e) => {
    e.preventDefault();
    const signupData = await postSignUp(
      username,
      email,
      password,
      accountname,
      intro,
      image
    );
    console.log("signup data " + signupData);
    navigate("/login");
  };

  return (
    <>
      <BackSpaceHeader />
      <Form onSubmit={handleProfileSignup}>
        <Title>프로필 설정</Title>
        <Selfchange>나중에 언제든지 변경할 수 있습니다.</Selfchange>
        <UserProfile
          tmargin={"30px"}
          lmargin={"103px"}
          rmargin={"103px"}
          bmargin={"35px"}
        ></UserProfile>
        <Input
          label="소개"
          type="text"
          name="intro"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          placeholder="한 줄 소개를 입력해주세요."
        />
        <Button type="submit" width="322px">
          깨끗한 지구 만들러 가기
        </Button>
      </Form>
    </>
  );
};

export default ProfileStart;
