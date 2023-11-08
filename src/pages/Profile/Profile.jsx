import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

import { getUserProfile } from "../../api/profileAPI";
import { getUserFeed, getUserCourse } from "../../api/postAPI";

import { userInfoAtom } from "../../recoil/userAtom";

import { useRecoilValue } from "recoil";

import MoreHeader from "../../components/common/Header/MoreHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import ProfileDetail from "./ProfileDetail";
import styled from "styled-components";
import { Logo } from "./ProfileDetailStyle";
import thread from "../../assets/icons/icon-post-list.svg";
import location from "../../assets/icons/icon-location.svg";
import Posting from "../../components/Post/Posting";
import Map from "../../components/kakaomap/MapComponent";

import Loading from "../Loading/Loading";

export default function Profile() {
  const { accountname } = useParams();

  const userInfo = useRecoilValue(userInfoAtom);

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

  // 추천 코스 가져오기
  const fetchUserCourse = useCallback(async () => {
    try {
      const response = await getUserCourse(accountname);

      if (response.length > 0) {
        setCourse(() => {
          return [...response];
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
              <Logo src={location} />
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
            // 추천 코스 리스트
            <GalleryContainer>
              {course.map((item) => (
                <CourseLink to={`/profile/${item.id}/course`} key={item.id}>
                  <Map data={item} />
                </CourseLink>
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
  width: 195px;
  height: 44px;
  border-bottom: 1px solid #dbdbdb;

  &:focus {
    border-bottom: 1.2px solid ${(props) => props.theme.colors.mainColor};
  }
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

export const CourseLink = styled(Link)`
  height: 120px;
`;
