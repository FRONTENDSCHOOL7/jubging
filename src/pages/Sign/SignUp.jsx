import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/common/Input/Input";
import { Form, Title } from "./SignUpStyle";
import Button from "../../components/common/Button/ButtonContainer";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    navigate("/signup/profile", {
      state: {
        email: email,
        password: password,
        username: username,
        accountname: accountname,
      },
    });
  };

  return (
    <>
      <BackSpaceHeader />
      <Form onSubmit={handleSignup}>
        <Title>이메일 회원가입</Title>
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
          name="accountname"
          value={accountname}
          onChange={(e) => setAccountname(e.target.value)}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          // error="이미 있는 이메일입니다."
        />

        {/* <Link to="/signup/profile"> */}
        <Button type="submit" width="322px">
          다음
        </Button>
        {/* </Link> */}
      </Form>
    </>
  );
};

export default SignUp;
