import { useEffect, useState } from "react";
import styled from "styled-components";

import { getUserSearch } from "../../api/profileAPI";
import useDebounce from "../../hook/useDebounce";

import Header from "../../components/common/Header/Header";
import Navbar from "../../components/common/Navbar/Navbar";
import UserListBox from "../../components/common/UserList/UserListBox";

const Search = () => {
  let limitedData = [];

  const [inputTxt, setInputTxt] = useState("");
  const [result, setResult] = useState([]);
  const [resultShow, setResultShow] = useState(15);

  const debounceValue = useDebounce(inputTxt);

  const handleSearchList = async () => {
    try {
      const response = await getUserSearch(debounceValue);
      setResult(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (debounceValue.length > 0) {
      handleSearchList();
    } else {
      setResult([]);
    }
  }, [debounceValue]);

  const handleSearchId = (event) => {
    let inputEvent = event.target.value;
    setInputTxt(inputEvent);
  };

  // 검색 결과 15개씩 보여주기
  const handleLoadMore = () => {
    setResultShow((prev) => prev + 15);
  };

  if (Array.isArray(result)) {
    limitedData = result.slice(0, resultShow);
  } else {
    return null;
  }

  return (
    <>
      <Header onChange={handleSearchId} />
      {inputTxt && result.length === 0 ? (
        <NoResult>검색 결과가 없습니다.</NoResult>
      ) : (
        <UerListContainer>
          {limitedData.map((item) => (
            <UserListBox
              key={limitedData.id}
              profileImage={item.image}
              userName={item.username}
              accountName={item.accountname}
              inputTxt={inputTxt}
            />
          ))}
          {result && result.length > resultShow && (
            <MoreBtn type="button" onClick={handleLoadMore} hoverFilter>
              더보기
            </MoreBtn>
          )}
        </UerListContainer>
      )}
      <Navbar />
    </>
  );
};

const UerListContainer = styled.section`
  padding: 16px 16px 60px;

  a {
    margin-bottom: 16px;
  }
`;

const MoreBtn = styled.button`
  width: 100%;
  margin: 20px auto;
  color: ${(props) => props.theme.colors.mainColor};
`;

const NoResult = styled.p`
  margin: 20px auto;
`;

export default Search;
