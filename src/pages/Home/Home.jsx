import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";

function Home() {
  return (
    <>
      <HeaderBar />
      <Posting />
      <Navbar />
    </>
  );
}

export default Home;
