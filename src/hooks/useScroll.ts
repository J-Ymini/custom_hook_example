import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    setScroll((prev) => ({
      ...prev,
      x: window.scrollX,
      y: window.scrollY,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};
