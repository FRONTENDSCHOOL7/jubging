// import { useEffect, useState, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { Map, Polyline } from "react-kakao-maps-sdk";
// import { getCoutseDetail } from "../../api/postAPI";

// import Loading from "../Loading/Loading";
// import Navbar from "../../components/common/Navbar/Navbar";
// import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

// import CourseHeader from "../../components/CourseDetail/CourseDetailHeader";

// import {
//   Title,
//   Label,
//   Detail,
//   MapCanvas,
//   Container,
// } from "./CourseDetailStyle";

// const CourseDetail = () => {
//   const { courseId } = useParams();
//   const [courseInfo, setCourseInfo] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [product, setproduct] = useState();

//   const { kakao } = window;

//   const mapContainer = useRef(null); // 지도를 표시할 div 레퍼런스

//   // 전체
//   // const [paseMap, setParseMap] = useState({});
//   // const [paseMap, setParseMap] = useState({});

//   // 지도 상태
//   const [mapCenter, setMapCenter] = useState();
//   const [mapLat, setMapLat] = useState();
//   const [mapLng, setMapLng] = useState();
//   const [mapLevel, setMapLevel] = useState();

//   // 선 상태
//   const [line, setLine] = useState([]);

//   // const [map, setMap] = useState();
//   // const [line, setLine] = useState();

//   useEffect(() => {
//     const fetchCourseDetail = async () => {
//       try {
//         const response = await getCoutseDetail(courseId);
//         setIsLoading(false);
//         console.log("response: ", response);
//         setCourseInfo(response.product);
//         setproduct(response.product); //product 넘기기  product.author product 안에 author 넘기는 것
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchCourseDetail();
//   }, [courseId]);

//   useEffect(() => {
//     if (courseInfo.itemImage) {
//       let parsedData = JSON.parse(courseInfo.itemImage);
//       let parsedMap = JSON.parse(parsedData.map);
//       setMapCenter(
//         new kakao.maps.LatLng(parsedMap.center.lat, parsedMap.center.lng)
//       );
//       setMapLevel(parsedMap.level);

//       console.log(parsedData);
//       console.log("map: ", JSON.parse(parsedData.map));
//       console.log("line: ", JSON.parse(parsedData.line));

//       let parsedLine = JSON.parse(parsedData.line);
//       setLine(parsedLine);
//     }
//   }, [courseInfo]);

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           <BackSpaceHeader />
//           <Title>
//             {/* {courseInfo.author.username} 님 만의
//             <br />
//             {courseInfo.itemName} 플로깅 코스 */}
//             <CourseHeader
//               product={product} //product 값 전체 넘김
//               courseId={courseId}
//             />
//           </Title>
//           <MapCanvas>
//             {mapCenter && (
//               <Map
//                 draggable={true}
//                 zoomable={true}
//                 isableDoubleClick={false}
//                 disableDoubleClickZoom={true}
//                 center={{ lat: mapCenter.getLat(), lng: mapCenter.getLng() }}
//                 level={mapLevel}
//                 style={{ width: "100%", height: "100%" }}
//               >
//                 {line.length > 0 && (
//                   <Polyline
//                     path={line}
//                     strokeWeight={3}
//                     strokeColor="#db4040"
//                     strokeOpacity={1}
//                     strokeStyle="solid"
//                   />
//                 )}
//               </Map>
//             )}
//           </MapCanvas>

//           <Container>
//             <div>
//               <Label>코스 이름</Label>
//               <Detail> {courseInfo.itemName}</Detail>
//             </div>
//             <div>
//               <Label>코스 길이</Label>
//               <Detail> {courseInfo.price}</Detail>
//             </div>
//             <div>
//               <Label>한줄평</Label>
//               <Detail> {courseInfo.link}</Detail>
//             </div>
//           </Container>
//           <Navbar />
//         </>
//       )}
//     </>
//   );
// };

// export default CourseDetail;

import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Map, Polyline } from "react-kakao-maps-sdk";
import { getCoutseDetail } from "../../api/postAPI";

import Loading from "../Loading/Loading";
import Navbar from "../../components/common/Navbar/Navbar";
import MoreHeader from "../../components/common/Header/Header";
import Header from "../../components/common/Header/Header";

import {
  Title,
  Label,
  Detail,
  MapCanvas,
  Container,
  UsernameBox,
  TitleBox,
} from "./CourseDetailStyle";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [product, setproduct] = useState();

  const { kakao } = window;

  const mapContainer = useRef(null); // 지도를 표시할 div 레퍼런스

  // 전체
  // const [paseMap, setParseMap] = useState({});
  // const [paseMap, setParseMap] = useState({});

  // 지도 상태
  const [mapCenter, setMapCenter] = useState();
  const [mapLat, setMapLat] = useState();
  const [mapLng, setMapLng] = useState();
  const [mapLevel, setMapLevel] = useState();

  // 선 상태
  const [line, setLine] = useState([]);

  // const [map, setMap] = useState();
  // const [line, setLine] = useState();

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await getCoutseDetail(courseId);
        setIsLoading(false);
        console.log("response: ", response);
        setCourseInfo(response.product);
        setproduct(response.product); //product 넘기기  product.author product 안에 author 넘기는 것
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourseDetail();
  }, [courseId]);

  useEffect(() => {
    if (courseInfo.itemImage) {
      let parsedData = JSON.parse(courseInfo.itemImage);
      let parsedMap = JSON.parse(parsedData.map);
      setMapCenter(
        new kakao.maps.LatLng(parsedMap.center.lat, parsedMap.center.lng)
      );
      setMapLevel(parsedMap.level);

      console.log(parsedData);
      console.log("map: ", JSON.parse(parsedData.map));
      console.log("line: ", JSON.parse(parsedData.line));

      let parsedLine = JSON.parse(parsedData.line);
      setLine(parsedLine);
    }
  }, [courseInfo]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header product={product} />
          <Title>
            <UsernameBox>{product.author.username} 님 만의</UsernameBox>
            <TitleBox>{product.itemName} 플로깅 코스</TitleBox>
          </Title>
          <MapCanvas>
            {mapCenter && (
              <Map
                draggable={true}
                zoomable={true}
                isableDoubleClick={false}
                disableDoubleClickZoom={true}
                center={{ lat: mapCenter.getLat(), lng: mapCenter.getLng() }}
                level={mapLevel}
                style={{ width: "100%", height: "100%" }}
              >
                {line.length > 0 && (
                  <Polyline
                    path={line}
                    strokeWeight={3}
                    strokeColor="#db4040"
                    strokeOpacity={1}
                    strokeStyle="solid"
                  />
                )}
              </Map>
            )}
          </MapCanvas>

          <Container>
            <div>
              <Label>코스 이름</Label>
              <Detail> {courseInfo.itemName}</Detail>
            </div>
            <div>
              <Label>코스 길이</Label>
              <Detail> {courseInfo.price}</Detail>
            </div>
            <div>
              <Label>한줄평</Label>
              <Detail> {courseInfo.link}</Detail>
            </div>
          </Container>
          <Navbar />
        </>
      )}
    </>
  );
};

export default CourseDetail;
