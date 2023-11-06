// react
import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// API
import { getUserProfile } from "../../api/profileAPI";
import { getUserFeed, getUserCourse } from "../../api/postAPI";

// atom
import { userInfoAtom } from "../../recoil/userAtom";
// import { loginAtom } from "../../recoil/loginAtom";

// recoil
import { useRecoilValue } from "recoil";

// components
import MoreHeader from "../../components/common/Header/MoreHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import ProfileDetail from "./ProfileDetail";
import styled from "styled-components";
import { Logo } from "./ProfileDetailStyle";
import thread from "../../assets/icons/icon-post-list.svg";
import gallery from "../../assets/icons/icon-post-album.svg";
import Posting from "../../components/Post/Posting";

import Loading from "../Loading/Loading";

export default function Profile() {
  // const limit = 10;
  const { accountname } = useParams();

  const userInfo = useRecoilValue(userInfoAtom);
  console.log(userInfo);

  const [ref, inView] = useInView();
  const [profile, setProfile] = useState({});
  const [feed, setFeed] = useState([]);
  const [course, setCourse] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [threadPost, setThreadPost] = useState(true);

  // 스레드 클릭 이벤트
  const handleThread = () => {
    setThreadPost(true);
  };

  // 갤러리 클릭 이벤트
  const handleGallery = () => {
    setThreadPost(false);
  };

  // 개인프로필 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserProfile(accountname);
      if (response && response.profile) {
        setProfile(response.profile);
        setIsLoading(false);
      }
      return response.profile;
    };
    fetchUserInfo();
  }, [accountname]);

  // 게시물 가져오기
  const fetchUserFeed = useCallback(async () => {
    try {
      const response = await getUserFeed(Infinity, skip, accountname);
      setIsLoading(false);
      if (response.length > 0) {
        setFeed(() => [...response]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [skip, accountname]);

  useEffect(() => {
    fetchUserFeed();
  }, [fetchUserFeed]);

  // 무한스크롤
  /* useEffect(() => {
    if (inView & !isLoading) {
      setSkip((prevSkip) => prevSkip + limit);
    }
  }, [inView, isLoading]); */

  // 추천 코스 가져오기
  const fetchUserCourse = useCallback(async () => {
    try {
      const response = await getUserCourse(accountname);

      if (response.length > 0) {
        setCourse((prev) => {
          return [...prev, ...response];
        });
      }
    } catch (error) {
      console.log();
    }
  }, [accountname]);

  useEffect(() => {
    fetchUserCourse();
  }, [fetchUserCourse]);

  return (
    <>
      <MoreHeader userInfo={userInfo} pageName="Profile" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfileDetail profile={profile} />

          <ViewButtonContainer>
            <ViewButton onClick={handleThread}>
              <Logo src={thread} />
            </ViewButton>

            <ViewButton onClick={handleGallery}>
              <Logo src={gallery} />
            </ViewButton>
          </ViewButtonContainer>

          {threadPost ? (
            <>
              <PostingContainer>
                {feed
                  .filter((post) => post.author.accountname === accountname)
                  .map((post) => (
                    // 게시글
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
                      dataPost={feed}
                      fetch={fetchUserFeed}
                    />
                  ))}
              </PostingContainer>
              <div ref={ref} />
            </>
          ) : (
            // 추천 코스 리스트
            <GalleryContainer>
              {course.map((course) => (
                <Link to={`/profile/course/${course.id}`} key={course.id}>
                  <ThumbnailButton>
                    <Thumbnail src={course.itemImage} alt="썸네일 이미지" />
                  </ThumbnailButton>
                </Link>
              ))}
            </GalleryContainer>
          )}
        </>
      )}
      <Navbar />
    </>
  );
}

export const ViewButtonContainer = styled.header`
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin-top: 28px;
`;

export const ViewButton = styled.button`
  width: 195px;
  height: 44px;
`;

const PostingContainer = styled.section`
  margin-bottom: 60px;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  padding: 28px 17px;
`;

export const ThumbnailButton = styled.button`
  background-color: ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
