import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";
import { Modal } from "../../components/common/Modal/Modal";
import useModalControl from "../../hook/useModalControl";

function Home() {
  const { ModalComponent } = useModalControl("Home");
  return (
    <>
      <HeaderBar />
      <Posting pageName="Home" />
      <Navbar />
      <ModalComponent>
        <Modal />
      </ModalComponent>
    </>
  );
}

export default Home;
