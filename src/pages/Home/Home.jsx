import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { getFollowFeed } from "../../api/postAPI";

import Loading from "./../Loading/Loading";
import NoFollowHome from "./NoFollowHome";
import Posting from "../../components/Post/Posting";
import Navbar from "../../components/common/Navbar/Navbar";
import Header from "../../components/common/Header/Header";
import AddButton from "../../components/common/Button/AddButton";
import A11yHidden from "../../components/common/A11yHidden/A11yHidden";

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

  useEffect(() => {
    fetchFollowFeed();
  }, [fetchFollowFeed, skip]);

  // 무한스크롤
  useEffect(() => {
    if (inView & !isLoading) {
      setSkip((prevSkip) => prevSkip + limit);
    }
  }, [inView, isLoading]);

  return (
    <>
      <Header>줍깅피드</Header>
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <NoFollowHome message="유저를 검색해 팔로우 해보세요!" />
      ) : (
        <PostingContainer>
          <h2>
            <A11yHidden>홈 피드</A11yHidden>
          </h2>
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
          <div ref={ref} />
        </PostingContainer>
      )}
      <AddButton />
      <Navbar />
    </>
  );
}

const PostingContainer = styled.section`
  margin-bottom: 60px;
`;

export default Home;
