import React from "react";

import { useScroll } from "src/hooks/useScroll";

const Scroll = () => {
  const { x, y } = useScroll();
  console.log(x, y);

  return (
    <div style={{ height: "1500px" }}>
      <h1>Scroll</h1>
    </div>
  );
};

export default Scroll;
