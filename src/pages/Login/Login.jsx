// react
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// API
import { postLogin } from "../../api/loginAPI";

// recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfoAtom } from "../../recoil/userAtom";
import { loginAtom } from "../../recoil/loginAtom";

// components
import { Title, EmailSignUp, Form } from "./LoginStyle";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/ButtonContainer";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import { styled } from 'styled-components';

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

  // 로그인 요청 함수
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = await postLogin(email, password);
    console.log("loginData ", loginData);

    // 유효성 검사
    if (loginData.status === 422) {
      setErrorMsg("비밀번호가 일치하지 않습니다.");
    } else {
      // localStorage에 token 값 저장
      localStorage.setItem("token", loginData.user.token);

      // 유저 정보 변경할 것 setUserInfo()
      setLogin(true);
      navigate("/home");
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
          // error="이미 있는 이메일입니다."
        />
        <Input
          label="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
          // error="이미 있는 비밀번호입니다."
        />

        <Button type="submit" width="332px" $disabled={!isFormComplete} bgColor={isFormComplete ? "#40A6DE" : "#94CEF8"}>
          로그인
        </Button>
        {/* 에러 메세지 컴포넌트 작성할 것 */}
        <Link to="/signup">
          <EmailSignUp>이메일로 회원가입하기</EmailSignUp>
        </Link>
      </Form>
    </>
  );
};

export default Login;

// error 부분 및 @ 인식 추가
