// react
import React, { useCallback, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

// api
import {
  getFollowerList,
  setFollowUser,
  setUnFollowUser,
} from "../../api/follow";

// components
import FollowerHeader from "../../components/common/Header/FollowerHeader";
import FollowerList from "./FollowList/FollowerList";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import styled from "styled-components";
import Loading from "../Loading/Loading";

export default function Followers() {
  const { accountname } = useParams();

  const [follower, setFollower] = useState([]);
  const [follow, setFollow] = useState(follower.isfollow);

  // 팔로우 이벤트
  const handleFollow = async (follower) => {
    const response = await setFollowUser(follower.accountname);
    console.log(response);
    setFollow(!follow);
    fetchFollwerList();
  };

  // 언팔로우 이벤트
  const handleUnFollow = async (follower) => {
    const response = await setUnFollowUser(follower.accountname);
    console.log(response);
    setFollow(!follow);
    fetchFollwerList();
  };

  // 팔로워 리스트 가져오기
  const fetchFollwerList = async () => {
    const response = await getFollowerList(accountname);
    setFollower(response.data);
  };

  useEffect(() => {
    fetchFollwerList();
  }, []);

  return (
    <>
      <FollowerHeader />
      <UserContainer>
        <ul>
          {follower.length > 0 ? (
            follower.map((follower, index) => {
              return (
                <li className="useList" key={index}>
                  <FollowerList follower={follower}></FollowerList>
                  {follower.isfollow ? (
                    <ButtonContainer
                      width={"65px"}
                      height={"28px"}
                      color={"black"}
                      bgColor={"white"}
                      border={"1px solid #DBDBDB"}
                      onClick={() => handleUnFollow(follower)}
                      hoverFilter
                    >
                      취소
                    </ButtonContainer>
                  ) : (
                    <ButtonContainer
                      width={"65px"}
                      height={"28px"}
                      bgColor={"#40A6DE"}
                      onClick={() => handleFollow(follower)}
                      hoverFilter
                    >
                      팔로우
                    </ButtonContainer>
                  )}
                </li>
              );
            })
          ) : (
            <Loading />
          )}
        </ul>
      </UserContainer>
    </>
  );
}

const UserContainer = styled.div`
  margin-top: 25px;

  .useList {
    display: flex;
    align-items: center;

    margin-right: 16px;
    margin-bottom: 20px;
  }
`;
