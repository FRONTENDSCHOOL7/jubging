// react
import React, { useEffect } from "react";

// api
import { getMyInfo } from "../../api/profileAPI";

// recoil
import { useRecoilState } from "recoil";

// atom
import { userInfoAtom } from "../../recoil/userAtom";

// components
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";
import { Modal } from "../../components/common/Modal/Modal";
import useModalControl from "../../hook/useModalControl";

function Home() {
  const { token } = localStorage.getItem("token");
  const { ModalComponent } = useModalControl("Home");

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const modifyFuc = () => {
    console.log("modify");
  };
  const deleteFuc = () => {
    console.log("delete");
  };

  // 내 프로필 가져오기
  useEffect(() => {
    const fetchMyInfo = async () => {
      const response = await getMyInfo(token);
      setUserInfo({
        ...userInfo,
        username: response.user.username,
        accountname: response.user.accountname,
        intro: response.user.intro,
        image: response.user.image,
      });
    };
    fetchMyInfo();
  }, []);

  console.log(userInfo);

  return (
    <>
      <HeaderBar />
      <Posting pageName="Home" />
      <Navbar />

      {/* 조건부 렌더링 본인, 타인  */}
      <ModalComponent>
        <Modal contents={["수정"]} handleFunc={modifyFuc} />
        <Modal contents={["삭제"]} handleFunc={deleteFuc} />
      </ModalComponent>

      {/* <ModalComponent>
        <Modal contents={["신고하기"]} handleFunc={reportFuc} />
      </ModalComponent> */}
    </>
  );
}

export default Home;
