import React from "react";

import { useClick } from "src/hooks";

const Click = (): JSX.Element => {
  const handleClick = (): void => {
    console.log("클릭 이벤트 테스트 함수입니다.");
  };

  const title = useClick<HTMLDivElement>(handleClick);
  console.log(title);

  return (
    <>
      <div ref={title}>Click</div>
    </>
  );
};

export default Click;
