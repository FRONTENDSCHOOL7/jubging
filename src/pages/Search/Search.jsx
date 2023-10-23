import React from "react";
import SearchHeader from "../../components/common/Header/SearchHeader";
import Navbar from "../../components/common/Navbar/Navbar";
// import UserListBox from "../../components/common/UserList/UserListBox";

export default function Search() {
  return (
    <>
      <SearchHeader />
      {/* 추후 map으로 나열되게 구현 */}
      {/* <UserListBox /> */}
      <Navbar />
    </>
  );
}
