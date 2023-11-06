import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../../api/axios";
import { postImgUpload } from "../../api/imageAPI";
import { setUserProfile } from "../../api/profileAPI";
import { checkAccountname } from "../../api/signupAPI";

import { userInfoAtom } from "../../recoil/userAtom";

import { useRecoilState } from "recoil";

import { Form, ModificationContainer } from "./ProfileModificationStyle";
import UserProfile from "../../components/common/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import UploadHeader from "../../components/common/Header/UploadHeader";
import { Alert, AlertChange } from "../../components/common/Alert/Alert";

const ProfileStartPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [submitState, setSubmitState] = useState(false);
  const [image, setImage] = useState("");
  const [enableEdit, setEnableEdit] = useState(false);
  const [accountnameErrorMsg, setAccountnameErrorMsg] = useState("");
  const [isCheckingAccountname, setIsCheckingAccountname] = useState(false);

  // 원래 프로필 정보 가져오기
  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.username);
      setAccountname(userInfo.accountname);
      setIntro(userInfo.intro);
      setImage(userInfo.image);
      setIsCheckingAccountname(true);
    }
  }, [userInfo]);

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

  const handleChange = () => {
    navigate(`/profile/${userInfo.accountname}`);
  };

  // 로그인 계정 프로필 atom 변경
  const handleModifyProfile = async (e) => {
    e.preventDefault();
    console.log("submit");
    setUserInfo({
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    });
    setSubmitState(true);
  };

  // 로그인 계정 프로필 변경
  useEffect(() => {
    const modifyUserProfile = async () => {
      const response = await setUserProfile({
        ...userInfo,
        username: userInfo.username,
        accountname: userInfo.accountname,
        intro: userInfo.intro,
        image: userInfo.image,
      });
      return response;
    };

    if (submitState) {
      modifyUserProfile();
    }
  }, [submitState]);

  // 계정id 유효성 검사
  const validateAccountname = (accountname) => {
    const re = /^[a-zA-Z0-9._]+$/;
    return re.test(accountname);
  };

  const handleAccountnameChange = async (e) => {
    setAccountname(e.target.value);

    if (e.target.value === "") {
      setAccountnameErrorMsg("");
      setIsCheckingAccountname(false);
      return;
    }

    // 계정ID 유효성 검사
    if (!validateAccountname(e.target.value)) {
      setAccountnameErrorMsg(
        "계정ID는 영문, 소문자, 특수문자 '.', '_'만 사용할 수 있습니다."
      );
      return;
    }

    try {
      const response = await checkAccountname(e.target.value);

      if (e.target.value === userInfo.accountname) {
        setAccountnameErrorMsg("");
        setIsCheckingAccountname(true);
      } else {
        setAccountnameErrorMsg(response.message);
        setIsCheckingAccountname(
          response.message === "사용 가능한 계정ID 입니다."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 저장 버튼 활성화
  useEffect(() => {
    setEnableEdit(!!(username && accountname && isCheckingAccountname));
  }, [username, accountname, isCheckingAccountname]);

  return (
    <>
      <Form onSubmit={handleModifyProfile}>
        <UploadHeader
          type={"submit"}
          disabled={!enableEdit}
          bgColor={enableEdit ? "#40A6DE" : "#94CEF8"}
        />
        <ModificationContainer>
          <UserProfile handleImgUpload={handleImgUpload} profileImage={image} />
          <Input
            id="username"
            label="이름"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="2~10자 이내여야 합니다."
            maxLength={10}
            minLength={2}
            required
          />
          <Input
            id="accountname"
            label="계정ID"
            type="text"
            name="userId"
            value={accountname}
            onChange={handleAccountnameChange}
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            error={accountnameErrorMsg}
            required
          />
          <Input
            id="intro"
            label="소개"
            type="text"
            name="selfIntroduction"
            value={intro || ""}
            onChange={(e) => setIntro(e.target.value)}
            placeholder="한 줄 소개를 입력해주세요."
          />
        </ModificationContainer>
      </Form>

      {enableEdit && submitState && (
        <Alert message="프로필이 변경되었습니다.">
          <AlertChange onChange={handleChange} />
        </Alert>
      )}
    </>
  );
};

export default ProfileStartPage;
