import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { BASE_URL } from "../../api/axios";
import { postSignUp } from "../../api/signupAPI";
import { postImgUpload } from "../../api/imageAPI";

import { Title, Form, Selfchange } from "./ProfileStartStyle";
import UserProfile from "../../components/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";

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
    navigate("/login");
  };

  // 이미지 업로드 핸들러
  const handleImgUpload = async (imageFile) => {
    const form = new FormData();
    form.append("image", imageFile);

    try {
      const imageData = await postImgUpload(form);
      const imageUrl = BASE_URL + imageData.filename;
      setImage(imageUrl);
    } catch (error) {
      console.log(error);
    }
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
          label="소개"
          type="text"
          name="intro"
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
};

export default ProfileStart;
