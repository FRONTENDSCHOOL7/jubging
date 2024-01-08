import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../recoil/userAtom";

import { getUserProfile } from "../../api/profileAPI";
import { getUserFeed, getUserCourse } from "../../api/postAPI";

import Header from "../../components/common/Header/Header";
import Navbar from "../../components/common/Navbar/Navbar";
import ProfileDetail from "../../components/Profile/ProfileDetail";
import { Logo } from "../../components/Profile/ProfileDetailStyle";
import thread from "../../assets/icons/icon-post-list.svg";
import location from "../../assets/icons/icon-post-album.svg";
import Posting from "../../components/Post/Posting";
import PostGallery from "../../components/Post/PostMain/PostGallery";

import Loading from "../Loading/Loading";

export default function Profile() {
  const { accountname } = useParams();
  const userInfo = useRecoilValue(userInfoAtom);

  const [profile, setProfile] = useState({});
  const [feed, setFeed] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [threadPost, setThreadPost] = useState(true);
  const [galleryPost, setGalleryPost] = useState(false);
  const [accumulate, setAccumulate] = useState(0);

  // 스레드 클릭 이벤트
  const handleThread = () => {
    setThreadPost(true);
    setGalleryPost(false);
  };

  // 갤러리 클릭 이벤트
  const handleGallery = () => {
    setThreadPost(false);
    setGalleryPost(true);
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

  // 추천 코스 가져오기
  const fetchUserCourse = useCallback(async () => {
    try {
      const response = await getUserCourse(accountname);

      if (response.length > 0) {
        let sum = 0;
        response.forEach((course) => {
          sum += course.price;
        });
        setAccumulate(sum);
      }
    } catch (error) {
      console.log(error);
    }
  }, [accountname]);

  useEffect(() => {
    fetchUserCourse();
  }, [fetchUserCourse]);

  return (
    <>
      {userInfo.accountname === accountname ? (
        <Header>마이페이지</Header>
      ) : (
        <Header>{accountname}</Header>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfileDetail profile={profile} accumulate={accumulate} />

          <ViewButtonContainer>
            <ViewButton onClick={handleThread}>
              <Logo Post={threadPost} src={thread} />
            </ViewButton>

            <ViewButton onClick={handleGallery}>
              <Logo Post={galleryPost} src={location} />
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
                      data={post}
                      fetch={fetchUserFeed}
                    />
                  ))}
              </PostingContainer>
            </>
          ) : (
            // 갤러리 형식
            <GalleryContainer>
              {feed
                .filter((post) => post.image !== null)
                .map((post) => (
                  <PostGallery
                    key={post.id}
                    postId={post.id}
                    postImage={post.image}
                  ></PostGallery>
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
  margin-top: 28px;
`;

export const ViewButton = styled.button`
  width: 50%;
  height: 44px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`;

const PostingContainer = styled.section`
  margin-bottom: 60px;
`;

export const GalleryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  padding: 28px 17px;
  margin-bottom: 60px;
`;
