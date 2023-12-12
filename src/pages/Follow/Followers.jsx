import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getFollowerList,
  setFollowUser,
  setUnFollowUser,
} from "../../api/follow";

import { useRecoilValue } from "recoil";

import { userInfoAtom } from "../../recoil/userAtom";

import FollowerList from "./FollowList/FollowerList";
import styled from "styled-components";
import Loading from "../Loading/Loading";
import NoFollowHome from "../Home/NoFollowHome";
import Button from "../../components/common/Button/Button";
import Header from "../../components/common/Header/Header";

export default function Followers() {
  const { accountname } = useParams();
  const userInfo = useRecoilValue(userInfoAtom);

  const [follower, setFollower] = useState([]);
  const [follow, setFollow] = useState(follower.isfollow);
  const [isLoading, setIsLoading] = useState(true);

  // 팔로우 이벤트
  const handleFollow = async (follower) => {
    const response = await setFollowUser(follower.accountname);
    setFollow(!follow);
    fetchFollwerList();
  };

  // 언팔로우 이벤트
  const handleUnFollow = async (follower) => {
    const response = await setUnFollowUser(follower.accountname);
    setFollow(!follow);
    fetchFollwerList();
  };

  // 팔로워 리스트 가져오기
  const fetchFollwerList = async () => {
    const response = await getFollowerList(accountname);
    setFollower(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFollwerList();
  }, []);

  return (
    <>
      <Header>팔로워</Header>
      {isLoading ? (
        <Loading />
      ) : (
        <UserList>
          {follower.length > 0 ? (
            follower.map((follower, index) => {
              return (
                <UserItem key={index}>
                  <FollowerList follower={follower} />
                  {follower.isfollow ? (
                    <Button
                      type="button"
                      size="sm"
                      variant="white"
                      onClick={() => handleUnFollow(follower)}
                    >
                      취소
                    </Button>
                  ) : userInfo.accountname === follower.accountname ? null : (
                    <Button
                      type="button"
                      size="sm"
                      variant="primary"
                      onClick={() => handleFollow(follower)}
                    >
                      팔로우
                    </Button>
                  )}
                </UserItem>
              );
            })
          ) : (
            <NoFollowHome message="팔로워가 없습니다!" />
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
