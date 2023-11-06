// Login.jsx

// react
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// API
import { postLogin } from "../../api/loginAPI";
import { getMyInfo } from "../../api/profileAPI";
import { updateAuthToken } from "../../api/axios";

// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfoAtom } from "../../recoil/userAtom";
import { loginAtom } from "../../recoil/loginAtom";

// components
import { Title, EmailSignUp, Form, ErrMsg } from "./LoginStyle";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/ButtonContainer";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

// 이메일 유효성 검사 함수
const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// 비밀번호 유효성 검사 함수
const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 12;
};

const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setLogin = useSetRecoilState(loginAtom);

  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
    // useEffect의 의존성 배열에 email과 password를 추가
    // 이렇게 하면 email, password 상태가 변경될 때마다 useEffect 내부의 함수가 실행
  }, [email, password]);

  // 이메일 에러 메시지
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  // 비밀번호 에러 메시지
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  // 로그인 요청 핸들러
  const handleLogin = async (e) => {
    e.preventDefault();

    // 입력 값 검사
    if (email === "" && password === "") {
      setEmailErrorMsg("이메일 또는 비밀번호를 입력해주세요.");
      setPasswordErrorMsg("이메일 또는 비밀번호를 입력해주세요.");
      return;
    } else if (email === "") {
      setEmailErrorMsg("이메일을 입력해주세요.");
      return;
    } else if (password === "") {
      setPasswordErrorMsg("비밀번호를 입력해주세요.");
      return;
    }

    if (!isFormComplete) return;

    // 유효성 검사
    if (!validateEmail(email)) {
      setEmailErrorMsg("이메일 형식이 올바르지 않습니다.");
      return;
    } else {
      setEmailErrorMsg("");
    }

    if (!validatePassword(password)) {
      setPasswordErrorMsg("비밀번호는 6자 이상이어야 합니다.");
      return;
    } else {
      setPasswordErrorMsg("");
    }

    try {
      // 로그인 요청
      const loginData = await postLogin(email, password);
      console.log("loginData ", loginData);

      // 유효성 검사
      if (loginData.status === 422) {
        setErrorMsg(loginData.message);
      } else {
        localStorage.setItem("token", loginData.user.token);
        updateAuthToken();
        // 사용자 프로필 정보 불러오기
        const myInfo = await getMyInfo(loginData.user.token);
        console.log("myInfo", myInfo);

        setUserInfo({
          ...userInfo,
          username: myInfo.user.username,
          accountname: myInfo.user.accountname,
          intro: myInfo.user.intro,
          image: myInfo.user.image,
        });
        setLogin(true);
        // localStorage에 token 값 저장
        localStorage.setItem("token", loginData.user.token);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackSpaceHeader />
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Input
          label="이메일"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일를 입력하세요."
          error={emailErrorMsg}
        />
        <Input
          label="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
          error={passwordErrorMsg}
        />
        <ErrMsg>{errorMsg}</ErrMsg>
        <Button
          type="submit"
          width="100%"
          disabled={!isFormComplete}
          bgColor={isFormComplete ? "#40A6DE" : "#94CEF8"}
          hoverFilter
        >
          로그인
        </Button>
        <Link to="/signup">
          <EmailSignUp>이메일로 회원가입하기</EmailSignUp>
        </Link>
      </Form>
    </>
  );
};

export default Login;

// error 부분 및 @ 인식 추가
