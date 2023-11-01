import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { getFollowFeed } from "../../api/postAPI";

import useModalControl from "../../hook/useModalControl";
import Loading from "./../Loading/Loading";
import NoFollowHome from "./NoFollowHome";
import Posting from "../../components/Post/Posting";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import { Modal } from "../../components/common/Modal/Modal";

function Home() {
  const limit = 10;
  const token = localStorage.getItem("token");

  const { ModalComponent } = useModalControl("Home");

  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);

  const modifyFuc = () => {
    console.log("modify");
  };
  const deleteFuc = () => {
    console.log("delete");
  };

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
        <NoFollowHome />
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
              />
            ))}
          </PostingContainer>
          <div ref={ref} />
        </>
      )}
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

const PostingContainer = styled.section`
  margin-bottom: 60px;
`;

export default Home;
