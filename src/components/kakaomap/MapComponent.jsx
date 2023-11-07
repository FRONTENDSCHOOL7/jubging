import React, { useEffect, useState } from "react";
import { Map, Polyline } from "react-kakao-maps-sdk";
import { MapCanvas } from "./MapComponentStyle";

const { kakao } = window;

export default function MapComponet({ data }) {
  // 지도 상태
  const [mapCenter, setMapCenter] = useState();
  const [mapLevel, setMapLevel] = useState();

  // 선 상태
  const [line, setLine] = useState([]);

  useEffect(() => {
    if (data.itemImage) {
      let pathdata = JSON.parse(data.itemImage);
      let parsedMap = JSON.parse(pathdata.map);
      setMapCenter(
        new kakao.maps.LatLng(parsedMap.center.lat, parsedMap.center.lng)
      );
      setMapLevel(parsedMap.level);
      let parsedLine = JSON.parse(pathdata.line);
      setLine(parsedLine);
    }
  }, []);

  return (
    <MapCanvas>
      {mapCenter && (
        <Map
          draggable={false}
          zoomable={false}
          isableDoubleClick={false}
          disableDoubleClickZoom={false}
          center={{ lat: mapCenter.getLat(), lng: mapCenter.getLng() }}
          level={8}
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
  );
}
