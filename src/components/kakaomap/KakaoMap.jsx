import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import Loading from "../../pages/Loading/Loading";
import { Alert, AlertUploadMap } from "../common/Alert/Alert";
import Button from "../common/Button/Button";

function KakaoMap() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [linePoints, setLinePoints] = useState([]);
  const [clickPosition, setClickPosition] = useState(null);
  const [mapInfo, setMapInfo] = useState("");
  const [isRightClicked, setIsRightClicked] = useState(false); // 버튼 비활성화를 위한 상태 추가
  const [isLoading, setIsLoading] = useState(true); // 로딩창을 위해서 상태 추가

  const { kakao } = window;

  const distanceOverlayRef = useRef(null);
  const startCircleRef = useRef(null);

  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    if (latitude && longitude) {
      const container = document.getElementById("map");

      // 지도를 생성하려는 요소가 DOM에 존재하는지 확인하고, 지도 생성
      if (container) {
        const options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 4,
        };
        const map = new kakao.maps.Map(container, options);

        // 지도 로딩이 완료되면 로딩 상태를 false로 변경
        setIsLoading(false);

        let drawingFlag = false;
        let moveLine;
        let clickLine;

        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
          const clickPosition = mouseEvent.latLng;
          setClickPosition(clickPosition);

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
            setIsRightClicked(true); // 우클릭이 발생했으므로 버튼 상태를 활성화
          }
        });
        function deleteClickLine() {
          if (clickLine) {
            clickLine.setMap(null);
            clickLine = null;
          }
        }
      } else {
        // 지도를 생성하려는 요소가 DOM에 존재하지 않으면 로딩 상태를 false로 변경
        setIsLoading(false);
      }
    } else {
      // 위도와 경도가 설정되지 않았으면 로딩 상태를 false로 변경
      setIsLoading(false);
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

      const startLat = linePoints[0].getLat();
      const startLng = linePoints[0].getLng();
      const endLat = linePoints[linePoints.length - 1].getLat();
      const endLng = linePoints[linePoints.length - 1].getLng();

      const centerLat = (startLat + endLat) / 2;
      const centerLng = (startLng + endLng) / 2;

      const options = {
        draggable: false,
        zoomable: false,
        disableDoubleClick: false,
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
      };
      const linePointsData = linePoints.map((point) => ({
        lat: point.getLat(),
        lng: point.getLng(),
      }));

      const stringifylinePointsData = JSON.stringify(linePointsData);

      const serialized = JSON.stringify(mapState);

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            id="map"
            style={{ width: "100%", height: "calc(100vh - 168px)" }}
          ></div>
          <Button
            onClick={isRightClicked ? handleModalMapOpen : null} // isRightClicked가 false일 때, 클릭 이벤트를 무시
            size="lg"
            // variant="primary"
            fontSize="1.05em"
            hoverFilter
            variant={isRightClicked ? "primary" : "disabled"} // bgColor 속성 추가
            disabled={!isRightClicked}
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
      )}
    </>
  );
}

export default KakaoMap;
