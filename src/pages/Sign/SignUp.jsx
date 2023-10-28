import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/common/Input/Input";
import { Form, Title } from "./SignUpStyle";
import Button from "../../components/common/Button/ButtonContainer";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

// 이메일 유효성 검사 함수
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// 비밀번호 유효성 검사 함수
const validatePassword = (password) => {
  return password.length >= 6 && password.length <=12;
}

// 이름 유효성 검사 함수
const validateUsername = (username) => {
  return username.length >= 2 && username.length <= 10;
}

// 계정ID 유효성 검사 함수
const validateAccountname = (accountname) => {
  const re = /^[a-zA-Z0-9._]+$/;
  return re.test(accountname);
}

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");

  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // 폼이 완성되지 않은 경우 함수 종료
    if(!isFormComplete) return;

    // 유효성 검사
    if (!validateEmail(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (!validatePassword(password)) {
      alert("비밀번호는 6~12자 이내여야 합니다.");
      return;
    }

    if (!validateUsername(username)) {
      alert("이름은 2~10자 이내여야 합니다.");
      return;
    }

    if (!validateAccountname(accountname)) {
      alert("계정ID는 영문, 소문자, 특수문자 '.', '_'만 사용할 수 있습니다.");
      return;
    }

    navigate("/signup/profile", {
      state: {
        email: email,
        password: password,
        username: username,
        accountname: accountname,
      },
    });
  };

  useEffect(() => {
    if (email !== "" && password !== "" && username !== "" && accountname !== "") {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [email, password, username, accountname]);

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
        <Button type="submit" width="322px" $disabled={!isFormComplete} bgColor={isFormComplete ? "#40A6DE" : "#94CEF8"}>
          다음
        </Button>
        {/* </Link> */}
      </Form>
    </>
  );
};

export default SignUp;
