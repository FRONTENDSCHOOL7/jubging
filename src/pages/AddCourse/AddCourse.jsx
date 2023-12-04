import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";
import { postCourseUpload } from "../../api/postAPI";

import UploadHeader from "../../components/common/Header/UploadHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import {
  Form,
  Title,
  MapCanvas,
  InputContainer,
  CourseLink,
} from "./AddCourseStyle";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

const { kakao } = window;

const AddCourse = ({ nickname }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

  const [courseName, setCourseName] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [courseReview, setCourseReview] = useState("");

  // 지도
  useEffect(() => {
    if (location.state.data) {
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
      // console.log("lineInfo : ", lineInfo);
      // console.log("mapinfo : ", mapInfo);
    }
  }, [location.state.data]);

  console.log(JSON.stringify(location.state.data));

  const handleSubmitMap = async (event) => {
    event.preventDefault();

    const mapData = {
      product: {
        itemName: courseName,
        price: parseInt(courseLength),
        link: courseReview,
        itemImage: JSON.stringify(location.state.data),
      },
    };
    const response = await postCourseUpload(mapData);
    response && navigate(`/profile/${userInfo.accountname}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmitMap}>
        <UploadHeader type={"submit"} />
        <Title>
          {userInfo.username} 님 만의 <br />
          플로깅 코스를 입력해주세요.
        </Title>

        {location.state.data ? (
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
              size="md"
              variant="primary"
              onClick={() => navigate("/profile/addcourse/drawcourse")}
            >
              경로 등록하러 가기
            </Button>
          </MapCanvas>
        )}

        <InputContainer>
          <Input
            label="코스 이름"
            type="text"
            name="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="2~15자 이내여야 합니다."
          />
          <Input
            label="코스 길이"
            type="number"
            name="courseLength"
            value={courseLength}
            onChange={(e) => setCourseLength(e.target.value)}
            placeholder="1 이상의 숫자만 입력 가능합니다."
          />
          <Input
            label="한줄평"
            type="text"
            name="courseReview"
            value={courseReview}
            onChange={(e) => setCourseReview(e.target.value)}
            placeholder="한 줄 평을 적어주세요."
          />
        </InputContainer>
      </Form>
      <Navbar />
    </>
  );
};

export default AddCourse;
