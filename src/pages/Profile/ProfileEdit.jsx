import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { setUserProfile } from "../../api/profileAPI";
import { checkAccountname } from "../../api/signupAPI";

import { userInfoAtom } from "../../recoil/userAtom";

import { useRecoilState } from "recoil";

import { Alert, AlertChange } from "../../components/common/Alert/Alert";
import UserProfile from "../../components/Profile/ProfileImage";
import Input from "../../components/common/Input/Input";
import Header from "../../components/common/Header/Header";
import useImageUploader from "../../hook/useImageUploader";

const ProfileStartPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const { image, setImage, handleImgUpload } = useImageUploader();

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [submitState, setSubmitState] = useState(false);
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

  const handleChange = () => {
    navigate(`/profile/${userInfo.accountname}`);
  };

  // 로그인 계정 프로필 atom 변경
  const handleModifyProfile = async (e) => {
    e.preventDefault();
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
      <form onSubmit={handleModifyProfile}>
        <Header variant={enableEdit && "primary"} disabled={!enableEdit}>
          프로필 작성
        </Header>
        <ModificationContainer>
          <UserProfile handleImgUpload={handleImgUpload} profileImage={image} />
          <Input
            id="username"
            label="이름"
            type="text"
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
            value={intro || ""}
            onChange={(e) => setIntro(e.target.value)}
            placeholder="한 줄 소개를 입력해주세요."
          />
        </ModificationContainer>
      </form>

      {enableEdit && submitState && (
        <Alert message="프로필이 변경되었습니다.">
          <AlertChange onChange={handleChange} />
        </Alert>
      )}
    </>
  );
};

const ModificationContainer = styled.section`
  padding: 0 34px;
`;

export default ProfileStartPage;
