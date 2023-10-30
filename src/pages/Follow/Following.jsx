import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getFollowingList,
  setFollowUser,
  setUnFollowUser,
} from "../../api/follow";
import FollowingHeader from "../../components/common/Header/FollowingHeader";
import FollowerList from "./FollowList/FollowerList";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import styled from "styled-components";

export default function Following() {
  const { accountname } = useParams();

  const [following, setFollowing] = useState([]);
  const [follow, setFollow] = useState(following.isfollow);

  // 팔로우 이벤트
  const handleFollow = async (followingUser) => {
    const response = await setFollowUser(followingUser.accountname);
    console.log(response);
    setFollowing((prev) =>
      prev.map((user) =>
        user.accountname === followingUser.accountname
          ? { ...user, isfollow: true }
          : user
      )
    );
  };

  // 언팔로우 이벤트
  const handleUnFollow = async (followingUser) => {
    const response = await setUnFollowUser(followingUser.accountname);
    console.log(response);
    setFollowing((prev) =>
      prev.map((user) =>
        user.accountname === followingUser.accountname
          ? { ...user, isfollow: false }
          : user
      )
    );
  };

  // 팔로잉 리스트 가져오기
  useEffect(() => {
    const fetchFollwingList = async () => {
      const response = await getFollowingList(accountname);
      setFollowing(response.data);
    };
    fetchFollwingList();
  }, []);

  return (
    <>
      <FollowingHeader />
      <UserContainer>
        <ul>
          {following.map((following, index) => {
            return (
              <li className="userList" key={index}>
                <FollowerList following={following}></FollowerList>
                {following.isfollow ? (
                  <ButtonContainer
                    width={"65px"}
                    height={"28px"}
                    color={"black"}
                    bgColor={"white"}
                    border={"1px solid #DBDBDB"}
                    onClick={() => handleUnFollow(following)}
                  >
                    취소
                  </ButtonContainer>
                ) : (
                  <ButtonContainer
                    width={"65px"}
                    height={"28px"}
                    bgColor={"#40A6DE"}
                    onClick={() => handleFollow(following)}
                  >
                    팔로우
                  </ButtonContainer>
                )}
              </li>
            );
          })}
        </ul>
      </UserContainer>
    </>
  );
}

const UserContainer = styled.div`
  margin-top: 25px;

  .userList {
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-bottom: 20px;
  }
`;
