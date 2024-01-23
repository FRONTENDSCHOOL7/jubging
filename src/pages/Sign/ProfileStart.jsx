import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useImageUploader from "../../hook/useImageUploader";
import { postSignUp } from "../../api/signupAPI";

import { Title, Form, Selfchange } from "./ProfileStartStyle";
import UserProfile from "../../components/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";

function ProfileStart() {
  const location = useLocation();
  const navigate = useNavigate();

  const { image, handleImgUpload } = useImageUploader();

  const [intro, setIntro] = useState("");

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
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleProfileSignup}>
        <Title>프로필 설정</Title>
        <Selfchange>나중에 언제든지 변경할 수 있습니다.</Selfchange>
        <UserProfile
          handleImgUpload={handleImgUpload}
          profileImage={image}
        ></UserProfile>
        <Input
          id="intro"
          label="소개"
          type="text"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          placeholder="한 줄 소개를 입력해주세요."
        />
        <Button size="lg" variant="primary">
          깨끗한 지구 만들러 가기
        </Button>
      </Form>
    </>
  );
}

export default ProfileStart;
