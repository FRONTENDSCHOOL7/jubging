import styled from "styled-components";

import UserListBox from "../../components/common/UserList/UserListBox";

const Contents = ({ userList, inputTxt }) => {
  return (
    <UerListContainer>
      {userList.map((item) => (
        <UserListBox
          key={userList.id}
          profileImage={item.image}
          userName={item.username}
          accountName={item.accountname}
          inputTxt={inputTxt}
        />
      ))}
    </UerListContainer>
  );
};

const UerListContainer = styled.section`
  padding: 16px 16px 60px 0;

  a {
    margin-bottom: 16px;
  }
`;

export default Contents;
