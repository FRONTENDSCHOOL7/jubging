import useModalControl from "../../hook/useModalControl";

import { Modal } from "../../components/common/Modal/Modal";
import ChatPage from "./ChatPage";
import ChatInput from "./ChatInput";
import ChatRoomHeader from "../../components/common/Header/ChatRoomHeader";

function Chat() {
  const { ModalComponent } = useModalControl("Chat");

  const exitChat = () => {
    console.log("Exit Chat");
  };

  return (
    <>
      <ChatRoomHeader pageName="Chat" />
      <ChatPage />
      <ChatInput />

      <ModalComponent>
        <Modal contents={["채팅방 나가기"]} handleFunc={exitChat} />
      </ModalComponent>
    </>
  );
}

export default Chat;
