import { useContext, useEffect, useState } from "react";

import { AuthContextStore } from "../../context/AuthContext";

import SearchHeader from "../../components/common/Header/SearchHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Contents from "./Contents";

import useDebounce from "../../hook/useDebounce";
// import { Helmet } from "react-helmet";

const Search = () => {
  const { userToken } = useContext(AuthContextStore);
  const [inputTxt, setInputTxt] = useState("");
  const [userList, setUserList] = useState([]);

  const debounceValue = useDebounce(inputTxt);

  const handleSearchList = async () => {
    try {
      const response = await fetch(
        `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${debounceValue}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setUserList(data);
      } else {
        console.error("요청에 실패했습니다.");
      }
    } catch (error) {
      console.error("실패:", error);
    }
  };

  useEffect(() => {
    if (debounceValue.length > 0) {
      handleSearchList();
    } else {
      setUserList([]);
    }
  }, [debounceValue]);

  const handleSearchId = (event) => {
    let inputEvent = event.target.value;
    setInputTxt(inputEvent);
  };

  return (
    <>
      <SearchHeader onChange={handleSearchId} />
      <Contents userList={userList} inputTxt={inputTxt} />
      <Navbar />
    </>
  );
};

export default Search;
