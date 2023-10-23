import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import HomePosting from "./HomePosting";
import Navbar from "../../components/common/Navbar/Navbar";

function Home() {
  return (
    <>
      <HeaderBar />
      <HomePosting />
      <Navbar />
    </>
  );
}

export default Home;