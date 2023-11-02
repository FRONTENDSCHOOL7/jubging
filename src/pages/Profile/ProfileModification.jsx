// react
import React, { useEffect, useState } from "react";

// api
import { setUserProfile } from "../../api/profileAPI";
import { postImgUpload } from "../../api/imageAPI"

// atom
import { userInfoAtom } from "../../recoil/userAtom";

// recoil
import { useRecoilState } from "recoil";

// component
import { Form, ModificationContainer } from "./ProfileModificationStyle";
import UserProfile from "../../components/common/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import UploadHeader from "../../components/common/Header/UploadHeader";

const ProfileStartPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [[image, setImage]] = useState("");

  // 로그인 계정 프로필 atom 변경
  const handleModifyProfile = async (e) => {
    e.preventDefault();
    console.log("submit");
    setUserInfo({
      username: username,
      accountname: accountname,
      intro: intro,
    });
  };

    // 이미지 업로드 핸들러
    const handleImageUpload = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
  
      const uploadData = await postImgUpload(formData);
      // 서버에서 반환된 이미지 경로 state에 저장
      setImage(uploadData.imagePath);
    }

  // 로그인 계정 프로필 변경
  useEffect(() => {
    const modifyUserProfile = async () => {
      const response = await setUserProfile({
        ...userInfo,
        username: userInfo.username,
        accountname: userInfo.accountname,
        intro: userInfo.intro,
        image: userInfo.image || "",
      });
      return response;
    };

    modifyUserProfile();
  }, [userInfo]);

  return (
    <>
      <Form onSubmit={handleModifyProfile}>
        <UploadHeader type={"submit"} />
        <ModificationContainer>
          <UserProfile
            tmargin={"30px"}
            lmargin={"103px"}
            rmargin={"103px"}
            bmargin={"35px"}
            handleImageUpload={handleImageUpload}
          ></UserProfile>
          <Input
            label="이름"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="2~10자 이내여야 합니다."
            // error="이미 있는 이메일입니다."
          />
          <Input
            label="계정ID"
            type="text"
            name="userId"
            value={accountname}
            onChange={(e) => setAccountname(e.target.value)}
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            // error="이미 있는 이메일입니다."
          />
          <Input
            label="소개"
            type="text"
            name="selfIntroduction"
            value={intro || ""}
            onChange={(e) => setIntro(e.target.value)}
            placeholder="한 줄 소개를 입력해주세요."
          />
        </ModificationContainer>
      </Form>
    </>
  );
};

export default ProfileStartPage;
