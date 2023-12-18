import { useLocation, useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/userAtom";
import { loginAtom } from "../../../recoil/loginAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";

import useModal from "../../../hook/useModal";
import {
  AnotherProfileModal,
  ExitChat,
  Modal,
  ProfileModal,
} from "../Modal/Modal";
import { Alert, AlertExitChat, AlertLogout, AlertReport } from "../Alert/Alert";

import Button from "../Button/Button";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";
import SearchButton from "../Button/SearchButton";
import { Container, SearchBar, Title } from "./HeaderStyle";

function Header({ children, onChange, variant, disabled }) {
  const {
    isModalOpen,
    isAlertOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenAlert,
    handleAlertClose,
    handleAlertOpenLogout,
    handleReport,
    handleAlertExit,
  } = useModal();

  const navigate = useNavigate();
  const { accountname } = useParams();
  const { pathname } = useLocation();

  const userInfo = useRecoilValue(userInfoAtom);
  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const resetLogin = useResetRecoilState(loginAtom);

  // 수정
  const handleModify = () => {
    navigate(`/profile/${accountname}/edit`);
  };

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("token");
    resetUserInfo();
    resetLogin();
    navigate("/");
  };

  return (
    <Container>
      <Title>
        {pathname !== "/" &&
          pathname !== "/home" &&
          pathname !== "/newsletter" && <BackButton />}
        {children && <h2>{children}</h2>}
      </Title>

      {/* 홈 */}
      {pathname === "/home" && <SearchButton />}

      {/* 뉴스레터 */}
      {pathname === "/newsletter" && <SearchButton />}

      {/* 검색 */}
      {pathname === "/search" && (
        <SearchBar type="text" placeholder="계정 검색" onChange={onChange} />
      )}

      {/* 게시물 작성 */}
      {pathname === "/post/upload" && (
        <>
          <Button size="md" variant={variant} disabled={disabled}>
            저장
          </Button>
        </>
      )}

      {/* 플로깅 기록 */}
      {pathname === `/profile/${userInfo.accountname}/addcourse` && (
        <>
          <Button size="md" variant="primary">
            저장
          </Button>
        </>
      )}

      {/* 프로필 수정 */}
      {pathname === `/profile/${userInfo.accountname}/edit` && (
        <>
          <Button size="md" variant={variant} disabled={disabled}>
            저장
          </Button>
        </>
      )}

      {/* 프로필 */}
      {pathname === `/profile/${accountname}` && (
        <>
          <MoreButton onClick={handleOpenModal} />

          {/* 모달 */}
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            {accountname === userInfo.accountname ? (
              <ProfileModal
                modify={handleModify}
                openLogout={handleAlertOpenLogout}
              />
            ) : (
              <AnotherProfileModal report={handleReport} />
            )}
          </Modal>

          {/* 경고창 */}
          {isAlertOpen &&
            (userInfo.accountname === accountname ? (
              <Alert isAlertOpen={isAlertOpen} message="로그아웃 하시겠어요?">
                <AlertLogout logout={handleLogout} onClose={handleAlertClose} />
              </Alert>
            ) : (
              <Alert message={`${accountname}님이 신고되었습니다.`}>
                <AlertReport onClose={handleAlertClose} />
              </Alert>
            ))}
        </>
      )}

      {/* 채팅방 */}
      {pathname === "/chat/room/" && (
        <>
          <MoreButton onClick={handleOpenModal} />

          {/* 모달 */}
          {isModalOpen && (
            <Modal onClose={handleCloseModal}>
              <ExitChat exit={handleOpenAlert}></ExitChat>
            </Modal>
          )}

          {/* 경고창 */}
          {isAlertOpen && (
            <Alert message="채팅방을 나가시겠습니까?">
              <AlertExitChat
                onClose={handleAlertClose}
                exit={handleAlertExit}
              ></AlertExitChat>
            </Alert>
          )}
        </>
      )}
    </Container>
  );
}

export default Header;
