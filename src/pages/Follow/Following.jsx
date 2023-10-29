import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFollowingList } from "../../api/follow";
import FollowingHeader from "../../components/common/Header/FollowingHeader";
import FollowerList from "./FollowList/FollowerList";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import styled from "styled-components";

export default function Following() {
  const { accountname } = useParams();

  const [following, setFollowing] = useState([]);

  // 팔로잉 리스트 가져오기
  useEffect(() => {
    const fetchFollwingList = async () => {
      const response = await getFollowingList(accountname);
      setFollowing(response.data);
    };
    fetchFollwingList();
  }, []);

  console.log("following ", following);
  console.log("accountname ", accountname);

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

  .userList {
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-bottom: 20px;
  }
`;
