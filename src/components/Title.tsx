import React from "react";

import useTitle from "src/hooks/useTitle";

const Title = (): JSX.Element => {
  const titleUpdator = useTitle("Loading");

  setTimeout(() => {
    titleUpdator("로딩이 끝난 뒤");
  }, 3000);

  return (
    <>
      <h1>Title</h1>
    </>
  );
};

export default Title;
