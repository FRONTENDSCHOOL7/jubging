// react
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// api
import { getFollowerList } from "../../api/follow";

// components
import FollowerHeader from "../../components/common/Header/FollowerHeader";
import FollowerList from "./FollowList/FollowerList";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import styled from "styled-components";

export default function Followers() {
  const { accountname } = useParams();
  const [follower, setFollower] = useState([]);

  console.log(follower);

  // 팔로워 리스트 가져오기
  useEffect(() => {
    const fetchFollwerList = async () => {
      const response = await getFollowerList(accountname);
      setFollower(response.data);
    };
    fetchFollwerList();
  }, []);

  // // 팔로우 이벤트
  // const handleFollow = async () => {
  //   const response = await setFollowUser();
  // };

  // // 언팔로우 이벤트
  // const handleUnFollow = async () => {
  //   const response = await setUnFollowUser();
  // };

  console.log("follower ", follower);

  return (
    <>
      <FollowerHeader />
      <UserContainer>
        <ul>
          {follower.map((follower, index) => {
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
                  >
                    취소
                  </ButtonContainer>
                ) : (
                  <ButtonContainer
                    width={"65px"}
                    height={"28px"}
                    bgColor={"#40A6DE"}
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

  .useList {
    display: flex;
    align-items: center;

    margin-right: 16px;
    margin-bottom: 20px;
  }
`;
