import { useRef, useEffect } from "react";

const useClick = <T extends HTMLElement>(
  handleClick: () => void
): React.RefObject<T> => {
  const element = useRef<T>(null);

  useEffect(() => {
    if (typeof handleClick !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("click", handleClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return element;
};

export default useClick;
