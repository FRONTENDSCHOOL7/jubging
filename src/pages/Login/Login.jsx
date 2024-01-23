import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postLogin } from "../../api/loginAPI";
import { getMyInfo } from "../../api/profileAPI";
import { updateAuthToken } from "../../api/axios";

import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfoAtom } from "../../recoil/userAtom";
import { loginAtom } from "../../recoil/loginAtom";

import { Title, EmailSignUp, Form, ErrMsg } from "./LoginStyle";
import Header from "../../components/common/Header/Header";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

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

      // 유효성 검사
      if (loginData.status === 422) {
        setErrorMsg(loginData.message);
      } else {
        localStorage.setItem("token", loginData.user.token);
        updateAuthToken();

        const myInfo = await getMyInfo(loginData.user.token);

        setUserInfo({
          ...userInfo,
          username: myInfo.user.username,
          accountname: myInfo.user.accountname,
          intro: myInfo.user.intro,
          image: myInfo.user.image,
        });
        setLogin(true);
        localStorage.setItem("token", loginData.user.token);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Input
          id="email"
          label="이메일"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일를 입력하세요."
          error={emailErrorMsg}
        />
        <Input
          id="password"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
          error={passwordErrorMsg}
        />
        <ErrMsg>{errorMsg}</ErrMsg>
        <Button
          size="lg"
          variant={isFormComplete && "primary"}
          disabled={!isFormComplete}
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
