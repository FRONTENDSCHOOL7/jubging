import { useLocation, useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/userAtom";
import { getCourseDelete } from "../../../api/postAPI";
import { loginAtom } from "../../../recoil/loginAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";

import useModal from "../../../hook/useModal";
import {
  AnotherProfileModal,
  ExitChat,
  Modal,
  ProfileModal,
  FeedModal,
  AnotherfeedModal,
} from "../Modal/Modal";
import {
  Alert,
  AlertExitChat,
  AlertLogout,
  AlertReport,
  AlertDeleteFeed,
} from "../Alert/Alert";

import Button from "../Button/Button";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";
import SearchButton from "../Button/SearchButton";
import { Container, SearchBar, Title } from "./HeaderStyle";

function Header({ children, onChange, variant, disabled, product }) {
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
  const { courseId } = useParams();
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

  // 코스 삭제 클릭이벤트
  const handleDeleteCourse = async () => {
    try {
      const response = await getCourseDelete(courseId);
      handleAlertClose();
      navigate(`/home`); // url 수정 예정
      console.log("course:", courseId);
      console.log("repose".response);
    } catch (error) {
      console.log(error);
    }
  };

  // 코스 수정 클릭이벤트
  const handleEditPost = () => {
    // navigate(`/product/${courseId}/edit`, {
    //   state: { postData },
    // });
  };

  return (
    <Container>
      <Title>
        {pathname !== "/" &&
          pathname !== "/home" &&
          pathname !== "/newsletter" && <BackButton />}
        {children && <h1>{children}</h1>}
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
      {pathname === `/ploggingrecord/${userInfo.accountname}/addcourse` && (
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

      {/* 코스 */}
      {pathname === `/ploggingrecord/${courseId}/course` && (
        <>
          <MoreButton onClick={handleOpenModal} />
          {/* 모달 */}
          {isModalOpen && (
            <Modal onClose={handleCloseModal}>
              {userInfo.accountname === product.author.accountname ? (
                <FeedModal
                  modify={handleEditPost}
                  deleteFeed={handleOpenAlert}
                />
              ) : (
                <AnotherfeedModal report={handleReport} />
              )}
            </Modal>
          )}
          {/* 경고창 */}
          {isAlertOpen && (
            <Alert message="게시글을 삭제할까요?">
              <AlertDeleteFeed
                deleteFeed={handleDeleteCourse}
                onClose={handleAlertClose}
              />
            </Alert>
          )}
        </>
      )}
    </Container>
  );
}

export default Header;
