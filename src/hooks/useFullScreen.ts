import { useRef } from "react";

export const useFullScreen = <T extends HTMLElement>(): {
  element: React.RefObject<T>;
  triggerFull: () => void;
} => {
  const element = useRef<T>(null);

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  return { element, triggerFull };
};
