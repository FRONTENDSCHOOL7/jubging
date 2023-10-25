import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";
import { Modal } from "../../components/common/Modal/Modal";
import useModalControl from "../../hook/useModalControl";

function Home() {
  const { ModalComponent } = useModalControl("Home");
  const modifyFuc = () => {
    console.log("modify");
  };
  const deleteFuc = () => {
    console.log("delete");
  };
  // const reportFuc = () => {
  //   console.log("report");
  // };

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
