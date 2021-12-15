import React from "react";
import { useFullScreen } from "src/hooks/useFullScreen";

const FullScreen = () => {
  console.log(useFullScreen());
  const { element, triggerFull } = useFullScreen<HTMLDivElement>();

  return (
    <>
      <h1>Full Screen</h1>
      <div
        style={{ backgroundColor: "#0066ff", width: "50px", height: "50px" }}
        ref={element}
      ></div>
      <button onClick={triggerFull}>Full screen</button>
    </>
  );
};

export default FullScreen;
