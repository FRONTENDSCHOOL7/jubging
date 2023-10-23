import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./ProfileModificationStyle";
import UserProfile from "../../components/common/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import UploadHeader from "../../components/common/Header/UploadHeader";

const ProfileStartPage = () => {
  const [selfIntroduction, setUserSelf] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <>
      <UploadHeader />
      <Form>
        <UserProfile
          tmargin={"30px"}
          lmargin={"103px"}
          rmargin={"103px"}
          bmargin={"35px"}
        ></UserProfile>
        <Input
          label="이름"
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="2~10자 이내여야 합니다."
          // error="이미 있는 이메일입니다."
        />
        <Input
          label="계정ID"
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          // error="이미 있는 이메일입니다."
        />
        <Input
          label="소개"
          type="text"
          name="selfIntroduction"
          value={selfIntroduction}
          onChange={(e) => setUserSelf(e.target.value)}
          placeholder="한 줄 소개를 입력해주세요."
        />
      </Form>
    </>
  );
};

export default ProfileStartPage;
