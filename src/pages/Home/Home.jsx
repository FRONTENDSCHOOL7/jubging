import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { getFollowFeed } from "../../api/postAPI";

import Loading from "./../Loading/Loading";
import NoFollowHome from "./NoFollowHome";
import Posting from "../../components/Post/Posting";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";

function Home() {
  const limit = 10;
  const token = localStorage.getItem("token");

  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);

  // 팔로우한 유저 피드 가져오기
  const fetchFollowFeed = useCallback(async () => {
    try {
      const newData = await getFollowFeed(limit, skip, token);
      setIsLoading(false);
      if (newData.length > 0) {
        setData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [limit, skip, token]);

  useEffect(
    () => {
      fetchFollowFeed();
    },
    [fetchFollowFeed],
    token
  );

  // 무한스크롤
  useEffect(() => {
    if (inView & !isLoading) {
      console.log(inView, "무한스크롤 실행~");
      setSkip((prevSkip) => prevSkip + limit);
    }
  }, [inView, isLoading]);

  return (
    <>
      <HeaderBar />
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <NoFollowHome message="유저를 검색해 팔로우 해보세요!" />
      ) : (
        <>
          <PostingContainer>
            {data.map((post) => (
              <Posting
                key={post.id}
                pageName="Home"
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
                dataPost={data}
              />
            ))}
          </PostingContainer>
          <div ref={ref} />
        </>
      )}
      <Navbar />
    </>
  );
}

const PostingContainer = styled.section`
  margin-bottom: 60px;
`;

export default Home;
