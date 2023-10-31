// 경로 이미지 저장공간
import React, { useState } from "react";
import KakaoMap from "./kakaomap/KakaoMap";

export const MapImageContext = React.createContext();

function ParentComponent() {
  const [mapImage, setMapImage] = useState(null);

  return (
    <MapImageContext.Provider value={{ mapImage, setMapImage }}>
      <KakaoMap />
    </MapImageContext.Provider>
  );
}

export default ParentComponent;
