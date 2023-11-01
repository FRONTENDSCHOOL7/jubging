import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { getFollowFeed, getPostAll } from "../../api/postAPI";

import HeaderBar from "../../components/common/Header/HomeHeader";
import NewsPosting from "../../components/Post/NewsPosting";
import Navbar from "../../components/common/Navbar/Navbar";
import Loading from "../Loading/Loading";
import NoFollowHome from "../Home/NoFollowHome";

function NewsLetter() {
  const limit = 5;
  const adminAccountName = "jub2";
  const token = localStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  // 팔로우한 유저 피드 가져오기
  const fetchFollowFeed = useCallback(async () => {
    try {
      let newData = await getPostAll(limit, skip, token);
      newData = newData.filter(
        (post) => post.author.accountname === adminAccountName
      );
      console.log(newData);
      setIsLoading(false);
      if (newData.length > 0) {
        setData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [limit, skip, token]);

  useEffect(() => {
    fetchFollowFeed();
  }, [fetchFollowFeed]);

  return (
    <>
      <HeaderBar />
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <NoFollowHome />
      ) : (
        <NewsLetterContainer>
          {data.map((post) => (
            <NewsPosting
              key={post.id}
              accountName={post.author.accountname}
              profileImage={post.author.image}
              userName={post.author.username}
              postImage={post.image}
              postText={post.content}
              postId={post.id}
              heartCount={post.heartCount}
              commentCount={post.commentCount}
              postDate={post.createdAt}
              hearted={post.hearted}
            />
          ))}
        </NewsLetterContainer>
      )}
      <Navbar />
    </>
  );
}

const NewsLetterContainer = styled.section`
  margin-bottom: 60px;
`;

export default NewsLetter;
