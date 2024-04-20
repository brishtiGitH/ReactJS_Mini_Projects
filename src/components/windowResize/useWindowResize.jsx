import { useEffect, useState } from "react";

export default function useWindowResize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setHeight(document.innerHeight);
        setWidth(document.innerWidth);
      });
    };
  }, []);
  return [height, width];
}
