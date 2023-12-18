import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getFollowingList,
  setFollowUser,
  setUnFollowUser,
} from "../../api/follow";

import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../recoil/userAtom";

import FollowerList from "./FollowList/FollowerList";
import styled from "styled-components";
import NoFollowHome from "../Home/NoFollowHome";
import Loading from "../Loading/Loading";
import Button from "../../components/common/Button/Button";
import Header from "../../components/common/Header/Header";

export default function Following() {
  const { accountname } = useParams();
  const userInfo = useRecoilValue(userInfoAtom);

  const [following, setFollowing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 팔로우 이벤트
  const handleFollow = async (followingUser) => {
    const response = await setFollowUser(followingUser.accountname);
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
      setIsLoading(false);
    };
    fetchFollwingList();
  }, []);

  return (
    <>
      <Header>팔로잉</Header>
      {isLoading ? (
        <Loading />
      ) : (
        <UserList>
          {following.length > 0 ? (
            following.map((following, index) => {
              return (
                <UserItem key={index}>
                  <FollowerList following={following} />
                  {following.isfollow ? (
                    <Button
                      size="sm"
                      variant="white"
                      onClick={() => handleUnFollow(following)}
                    >
                      취소
                    </Button>
                  ) : userInfo.accountname === following.accountname ? null : (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleFollow(following)}
                    >
                      팔로우
                    </Button>
                  )}
                </UserItem>
              );
            })
          ) : (
            <NoFollowHome message="유저를 검색하여 팔로우 해보세요!" />
          )}
        </UserList>
      )}
    </>
  );
}

const UserList = styled.ul`
  margin: 25px 10px 0;
`;

const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  Button {
    flex: 0 0 4rem;
  }
`;
