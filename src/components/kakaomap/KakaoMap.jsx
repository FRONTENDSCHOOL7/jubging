import { useEffect, useState, useRef } from "react";

function KakaoMap() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [distanceOverlay, setDistanceOverlay] = useState(null);

  const { kakao } = window;

  // useEffect 내부에서는 distanceOverlay의 최신 상태를 접근할 수 없기 때문에, useRef를 이용하여 distanceOverlay의 최신 상태를 항상 참조
  const distanceOverlayRef = useRef(null);

  const startCircleRef = useRef(null); // 시작점을 저장할 useRef 생성

  useEffect(() => {
    if (latitude && longitude) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 4,
      };

      // 지도 생성
      const map = new kakao.maps.Map(container, options);

      let drawingFlag = false;
      let moveLine;
      let clickLine;

      // 지도에 클릭 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        const clickPosition = mouseEvent.latLng;

        if (!drawingFlag) {
          drawingFlag = true;

          deleteClickLine();

          // 이전 오버레이 삭제
          if (distanceOverlayRef.current) {
            distanceOverlayRef.current.setMap(null);
          }

          // 이전 시작점 삭제
          if (startCircleRef.current) {
            startCircleRef.current.setMap(null);
          }

          // 시작 위치에 원 추가
          const circle = new kakao.maps.Circle({
            center: clickPosition,
            radius: 15, // 원의 반지름 (단위: m)
            strokeWeight: 3,
            strokeColor: "#000",
            strokeOpacity: 0.8,
            fillColor: "#eee",
          });

          circle.setMap(map);
          startCircleRef.current = circle; // 시작점 저장

          // 완성된 선
          clickLine = new kakao.maps.Polyline({
            map: map,
            path: [clickPosition],
            strokeWeight: 3,
            strokeColor: "#db4040",
            strokeOpacity: 1,
            strokeStyle: "solid",
          });

          //   잇는 중인 선
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
        }
      });

      // 지도에 마우스무브 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
        if (drawingFlag) {
          const mousePosition = mouseEvent.latLng;

          const path = clickLine.getPath();

          const movepath = [path[path.length - 1], mousePosition];
          moveLine.setPath(movepath);
          moveLine.setMap(map);
        }
      });

      // 지도에 마우스 오른쪽 클릭 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "rightclick", function (mouseEvent) {
        if (drawingFlag) {
          moveLine.setMap(null);
          moveLine = null;

          const path = clickLine.getPath();

          const distance = Math.round(clickLine.getLength() / 1000) + " km";

          console.log(
            "Total distance:",
            Math.round(clickLine.getLength() / 1000) + " km"
          );

          // 새로운 오버레이 생성
          const newDistanceOverlay = new kakao.maps.CustomOverlay({
            position: path[path.length - 1],
            content:
              '<div style="padding:5px;background-color:white;border-radius:50px;border:solid 1px black;">' +
              distance +
              "</div>",
            yAnchor: 1,
          });

          newDistanceOverlay.setMap(map);
          distanceOverlayRef.current = newDistanceOverlay; // state 업데이트

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

  return (
    <>
      <div id="map" style={{ width: "100%", height: "80vh" }}></div>
    </>
  );
}
export default KakaoMap;
