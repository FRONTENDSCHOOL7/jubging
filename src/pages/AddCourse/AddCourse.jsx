import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";
import { postCourseUpload, putEditCourse } from "../../api/postAPI";

import { Title, MapCanvas, InputContainer } from "./AddCourseStyle";
import Navbar from "../../components/common/Navbar/Navbar";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import Header from "../../components/common/Header/Header";
import A11yHidden from "../../components/common/A11yHidden/A11yHidden";

const { kakao } = window;

const AddCourse = ({ nickname, editData, isEdit }) => {
// 충돌 부분 임시 주석처리
// const AddCourse = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const { courseId } = useParams();

  const [courseName, setCourseName] = useState("");
  const [courseReview, setCourseReview] = useState("");

  // 코스 수정 및 업로드
  useEffect(() => {
    console.log(editData);
    if (editData) {
      setCourseName(editData.courseName);
      setCourseLength(editData.courseLength);
      setCourseReview(editData.courseReview);
    }
  }, [editData]);

  const handleSubmitMap = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const mapData = {
          product: {
            itemName: courseName,
            price: parseInt(location.state.distance),
            link: courseReview,
            itemImage: JSON.stringify(location.state.data),
          },
        };
        let response;
        if (editData) {
          response = await putEditCourse(courseId, mapData);
        } else {
          // 코스 업로드 API를 호출
          response = await postCourseUpload(mapData);
        }
        response && navigate(`/ploggingrecord/${userInfo.accountname}`);
      } catch (error) {
        console.log(error);
      }
    },
    [
      courseName,
      courseReview,
      location.state,
      navigate,
      userInfo.accountname,
      editData,
      courseId,
    ]
  );

  // 지도
  useEffect(() => {
    if (location.state && location.state.data) {
      const container = document.getElementById("newMap");
      const mapInfo = JSON.parse(location.state.data.map);
      const lineInfo = JSON.parse(location.state.data.line);
      const center = new kakao.maps.LatLng(
        mapInfo.center.lat,
        mapInfo.center.lng
      );
      const options = {
        draggable: false,
        zoomable: false,
        isableDoubleClick: false,
        disableDoubleClickZoom: false,
        center: center,
        level: mapInfo.level,
      };
      const newMap = new kakao.maps.Map(container, options);

      const linePointsLatLng = lineInfo.map(
        (point) => new kakao.maps.LatLng(point.lat, point.lng)
      );

      new kakao.maps.Polyline({
        map: newMap,
        path: linePointsLatLng,
        strokeWeight: 3,
        strokeColor: "#db4040",
        strokeOpacity: 1,
        strokeStyle: "solid",
      });
    }
  }, [location.state]);

  // const handleSubmitMap = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     try {
  //       if (!location.state) {
  //         console.log("location.state is null");
  //         return;
  //       }
  //       const mapData = {
  //         product: {
  //           itemName: courseName,
  //           price: parseInt(location.state.distance),
  //           link: courseReview,
  //           itemImage: JSON.stringify(location.state.data),
  //         },
  //       };
  //       const response = await postCourseUpload(mapData);
  //       response && navigate(`/ploggingrecord/${userInfo.accountname}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   [courseName, courseReview, location.state, navigate, userInfo.accountname]
  // );

  return (
    <>
      <form onSubmit={handleSubmitMap}>
        <Header>플로깅 기록</Header>
        <Title>
          {userInfo.username} 님 만의 <br />
          플로깅 코스를 입력해주세요.
        </Title>

        {location.state && location.state.data ? (
          <MapCanvas id="newMap" />
        ) : (
          <MapCanvas>
            <h3>Map 그리는 방법</h3>
            <ul>
              <li>지도를 드래그하여 이동할 수 있습니다.</li>
              <li>지도를 클릭하면 거리 그리기가 시작됩니다.</li>
              <li>지도를 드래그하며 이동하고 경유할 지점을 클릭합니다.</li>
              <li>마지막으로 도착지점을 클릭합니다.</li>
              <li>오른쪽 마우스를 클릭하면 경로 그리기가 종료됩니다.</li>
            </ul>

            <Button
              type="button"
              size="md"
              variant="primary"
              onClick={() =>
                isEdit
                  ? navigate("/ploggingrecord/addcourse/drawcourseedit")
                  : navigate("/ploggingrecord/addcourse/drawcourse")
              }
            >
              경로 등록하러 가기
            </Button>
          </MapCanvas>
        )}

        <InputContainer>
          <h2>
            <A11yHidden>플로깅 기록 입력</A11yHidden>
          </h2>
          <Input
            id="courseName"
            label="코스 이름"
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="2~15자 이내여야 합니다."
          />
          <Input
            id="courseLength"
            label="코스 길이"
            type="number"
            value={location.state ? location.state.distance : ""}
            // onChange={(e) => setCourseLength(e.target.value)}
            placeholder="코스입력 시 자동입력됩니다."
            disabled
          />
          <Input
            id="courseReview"
            label="한줄평"
            type="text"
            value={courseReview}
            onChange={(e) => setCourseReview(e.target.value)}
            placeholder="한 줄 평을 적어주세요."
          />
        </InputContainer>
      </form>
      <Navbar />
    </>
  );
};

export default AddCourse;
