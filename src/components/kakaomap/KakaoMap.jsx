import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import Button from "../common/Button/ButtonContainer";
import { Alert, AlertUploadMap } from "../common/Alert/Alert";

function KakaoMap() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [linePoints, setLinePoints] = useState([]);
  const [clickPosition, setClickPosition] = useState(null); // clickPosition 상태 추가
  const [mapInfo, setMapInfo] = useState("");

  const { kakao } = window;

  const distanceOverlayRef = useRef(null);
  const startCircleRef = useRef(null);

  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    if (latitude && longitude) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 4,
      };
      const map = new kakao.maps.Map(container, options);

      let drawingFlag = false;
      let moveLine;
      let clickLine;

      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        const clickPosition = mouseEvent.latLng;
        setClickPosition(clickPosition); // clickPosition 상태 업데이트

        if (!drawingFlag) {
          drawingFlag = true;
          deleteClickLine();

          if (distanceOverlayRef.current) {
            distanceOverlayRef.current.setMap(null);
          }

          if (startCircleRef.current) {
            startCircleRef.current.setMap(null);
          }

          const circle = new kakao.maps.Circle({
            center: clickPosition,
            radius: 15,
            strokeWeight: 3,
            strokeColor: "#000",
            strokeOpacity: 0.8,
            fillColor: "#eee",
          });

          circle.setMap(map);
          startCircleRef.current = circle;

          clickLine = new kakao.maps.Polyline({
            map: map,
            path: [clickPosition],
            strokeWeight: 3,
            strokeColor: "#db4040",
            strokeOpacity: 1,
            strokeStyle: "solid",
          });

          moveLine = new kakao.maps.Polyline({
            strokeWeight: 3,
            strokeColor: "#db4040",
            strokeOpacity: 0.5,
            strokeStyle: "solid",
          });
        } else {
          const path = clickLine.getPath();

          path.push(clickPosition);

          clickLine.setPath(path);

          setLinePoints(path);
          // console.log("linePoints ", linePoints);
        }
      });

      kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
        if (drawingFlag) {
          const mousePosition = mouseEvent.latLng;

          const path = clickLine.getPath();

          const movepath = [path[path.length - 1], mousePosition];
          moveLine.setPath(movepath);
          moveLine.setMap(map);
        }
      });

      kakao.maps.event.addListener(map, "rightclick", function (mouseEvent) {
        if (drawingFlag) {
          moveLine.setMap(null);
          moveLine = null;

          const path = clickLine.getPath();

          const distance =
            "총 거리 : " + Math.round(clickLine.getLength()) + " m";

          const newDistanceOverlay = new kakao.maps.CustomOverlay({
            position: path[path.length - 1],
            content:
              '<div style="padding:5px;background-color:white;border-radius:50px;border:solid 1px black;">' +
              distance +
              "</div>",
            yAnchor: 1,
          });

          newDistanceOverlay.setMap(map);
          distanceOverlayRef.current = newDistanceOverlay;

          drawingFlag = false;
        }
      });
      function deleteClickLine() {
        if (clickLine) {
          clickLine.setMap(null);
          clickLine = null;
        }
      }
    }
  }, [latitude, longitude]);

  const accessToGeo = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(accessToGeo);
  };

  askForLocation();

  const drawLineOnNewMap = () => {
    if (clickPosition) {
      const container = document.getElementById("newMap");

      // 선의 시작점과 끝점 계산
      const startLat = linePoints[0].getLat();
      const startLng = linePoints[0].getLng();
      const endLat = linePoints[linePoints.length - 1].getLat();
      const endLng = linePoints[linePoints.length - 1].getLng();

      // 선의 중간점 계산
      const centerLat = (startLat + endLat) / 2;
      const centerLng = (startLng + endLng) / 2;

      const options = {
        draggable: false,
        zoomable: false,
        isableDoubleClick: false,
        disableDoubleClickZoom: false,
        center: clickPosition,
        center: new kakao.maps.LatLng(centerLat, centerLng),
        level: 6,
      };
      const newMap = new kakao.maps.Map(container, options);

      new kakao.maps.Polyline({
        map: newMap,
        path: linePoints,
        strokeWeight: 3,
        strokeColor: "#db4040",
        strokeOpacity: 1,
        strokeStyle: "solid",
      });
      const mapState = {
        center: {
          lat: newMap.getCenter().getLat(),
          lng: newMap.getCenter().getLng(),
        },
        level: newMap.getLevel(),
        // 필요한 다른 상태를 추가...
      };
      const linePointsData = linePoints.map((point) => ({
        lat: point.getLat(),
        lng: point.getLng(),
      }));

      // 선
      const stringifylinePointsData = JSON.stringify(linePointsData);

      const parselinePointsData = JSON.parse(stringifylinePointsData);
      console.log("stringify", stringifylinePointsData);
      console.log("parse", parselinePointsData);

      // 지도
      const serialized = JSON.stringify(mapState);

      console.log(serialized);

      const mapInfo = {
        map: serialized,
        line: stringifylinePointsData,
      };

      setMapInfo(mapInfo);
      navigate(`/profile/${userInfo.accountname}/addcourse`, {
        state: { data: mapInfo },
      });
    }
  };

  const [openAlertId, setOpenAlertId] = useState(null);

  const handleModalMapOpen = () => {
    setOpenAlertId(true);
  };
  const handleModalMapClose = () => {
    setOpenAlertId(false);
  };

  return (
    <>
      <div id="map" style={{ width: "100%", height: "765px" }}></div>
      <Button
        onClick={handleModalMapOpen}
        width="100%"
        height="40px"
        hoverFilter
      >
        경로 등록
      </Button>
      <div id="newMap"></div>

      {/* 경고창 */}
      {openAlertId && (
        <Alert message="경로를 등록하시겠습니까?">
          <AlertUploadMap
            upload={drawLineOnNewMap}
            onClose={handleModalMapClose}
          ></AlertUploadMap>
        </Alert>
      )}
    </>
  );
}

export default KakaoMap;
