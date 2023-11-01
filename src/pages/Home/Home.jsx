// react
import React, { useCallback, useEffect, useState } from "react";

// api
import { getMyInfo } from "../../api/profileAPI";

// recoil
import { useRecoilState } from "recoil";

// atom
import { userInfoAtom } from "../../recoil/userAtom";

// components
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";
import { Modal } from "../../components/common/Modal/Modal";
import useModalControl from "../../hook/useModalControl";
import { getFollowFeed } from "../../api/postAPI";
import Loading from "./../Loading/Loading";
import styled from "styled-components";
import NoFollowHome from "./NoFollowHome";

function Home() {
  const token = localStorage.getItem("token");
  const limit = 5;
  // console.log(token);

  const { ModalComponent } = useModalControl("Home");

  // const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [data, setData] = useState([]);

  const modifyFuc = () => {
    console.log("modify");
  };
  const deleteFuc = () => {
    console.log("delete");
  };

  // 내 프로필 가져오기
  /* useEffect(() => {
    const fetchMyInfo = async () => {
      const response = await getMyInfo(token);
      if (response && response.user) {
        setUserInfo({
          ...userInfo,
          username: response.user.username,
          accountname: response.user.accountname,
          intro: response.user.intro,
          image: response.user.image,
        });
      }
    };
    fetchMyInfo();
  }, []); */

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

  return (
    <>
      <HeaderBar />
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <NoFollowHome />
      ) : (
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
