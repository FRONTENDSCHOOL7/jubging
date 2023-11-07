import profile from "../../assets/images/rabbit-face.png";

import {
  Wrapper,
  MessageGroup,
  MessageContainer,
  Message,
  ProfilePhoto,
  Time,
} from "./ChatPageStyle";

function ChatPage() {
  return (
    <Wrapper>
      <MessageGroup $isMine={false}>
        <ProfilePhoto>
          <img src={profile} alt="프로필 사진" />
        </ProfilePhoto>
        <MessageContainer $isMine={false}>
          <div>
            <Message $isMine={false}>
              오늘 처음 플로깅 해봤는데 넘 뿌듯하네요! 다음에도 같이 해요^_^
            </Message>
            <Time $isMine={false}>12:39</Time>
          </div>
        </MessageContainer>
      </MessageGroup>

      <MessageGroup $isMine={true}>
        <MessageContainer $isMine={true}>
          <Message $isMine={true}>오늘 러닝 즐거웠어용~</Message>
          <Time $isMine={true}>12:50</Time>
        </MessageContainer>
      </MessageGroup>
    </Wrapper>
  );
}

export default ChatPage;
