import {
  Wrapper,
  MessageGroup,
  MessageContainer,
  Message,
  ProfilePhoto,
  Time,
} from "./ChatPageStyle";

function ChatPage({ profilePhoto }) {
  return (
    <Wrapper>
      <MessageGroup $isMine={false}>
        <ProfilePhoto>
          <img src={profilePhoto} alt="프로필 사진" />
        </ProfilePhoto>
        <MessageContainer $isMine={false}>
          <div>
            <Message $isMine={false}>
              그동안 정말 뜻깊은 시간이었어! 많은 분들과 함께 해서 즐거웠고
              매니저님, 강사님들께 감사인사를 드리고 싶다!!!
            </Message>
            <Time $isMine={false}>12:39</Time>
          </div>
        </MessageContainer>
      </MessageGroup>

      <MessageGroup $isMine={true}>
        <MessageContainer $isMine={true}>
          <Message $isMine={true}>동주 님 수고</Message>
          <Time $isMine={true}>12:50</Time>
        </MessageContainer>
      </MessageGroup>
    </Wrapper>
  );
}

export default ChatPage;
