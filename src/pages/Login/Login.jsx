import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input/Input";
import { Title, EmailSignUp, Form } from "./LoginStyle";
import Button from "../../components/common/Button/ButtonContainer";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <BackSpaceHeader />
      <Form>
        <Title>로그인</Title>
        <Input
          label="이메일"
          type="text"
          name="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
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

        <Link to="/home">
          <Button width="332px">로그인</Button>
        </Link>
        <Link to="/signup">
          <EmailSignUp>이메일로 회원가입하기</EmailSignUp>
        </Link>
      </Form>
    </>
  );
};

export default Login;

// error 부분 및 @ 인식 추가
