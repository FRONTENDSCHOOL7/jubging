import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScrollTop() {
  const { pathname } = useLocation();

  // pathname 바뀔때마다 스크롤 최상단으로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
