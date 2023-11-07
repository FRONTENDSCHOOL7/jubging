import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { getUserFeed } from "../../api/postAPI";

import { jobgingAtom } from "../../recoil/jobgingAtom";
import { useRecoilValue } from "recoil";

import HeaderBar from "../../components/common/Header/HomeHeader";
import NewsPosting from "../../components/Post/NewsPosting";
import Navbar from "../../components/common/Navbar/Navbar";
import Loading from "../Loading/Loading";
import NoFollowHome from "../Home/NoFollowHome";

function NewsLetter() {
  const limit = 10;

  const jobgingData = useRecoilValue(jobgingAtom);
  const accountname = jobgingData.accountname;

  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  // 뉴스레터 게시글 가져오기
  const fetchNewLetterFeed = useCallback(async () => {
    try {
      const response = await getUserFeed(limit, skip, accountname);
      setIsLoading(false);
      if (response.length > 0) {
        setData((prev) => {
          return [...prev, ...response];
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [limit, skip, accountname]);

  useEffect(() => {
    fetchNewLetterFeed();
  }, [fetchNewLetterFeed]);

  // 무한스크롤
  useEffect(() => {
    if (inView & !isLoading) {
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
            <div ref={ref} />
          </NewsLetterContainer>
        </>
      )}
      <Navbar />
    </>
  );
}

const NewsLetterContainer = styled.section`
  margin-bottom: 60px;
`;

export default NewsLetter;
