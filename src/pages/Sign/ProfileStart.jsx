import React, { useState } from "react";
import styled from "styled-components";
import UserProfile from "../../components/common/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import { Title, Form, Selfchange } from "./ProfileStartStyle";

const ProfileStartPage = () => {
  const [selfIntroduction, setUserSelf] = useState("");

  return (
    <Form>
      <Title>프로필 설정</Title>
      <Selfchange>나중에 언제든지 변경할 수 있습니다.</Selfchange>
      <UserProfile />
      <Input
        label="소개"
        type="text"
        name="selfIntroduction"
        value={selfIntroduction}
        onChange={(e) => setUserSelf(e.target.value)}
        placeholder="한 줄 소개를 입력해주세요."
      />
    </Form>
  );
};

export default ProfileStartPage;
