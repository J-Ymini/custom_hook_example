import React from "react";

import { useInput } from "src/hooks";

const Input = (): JSX.Element => {
  const maxLength = (value: string) => value.length <= 10;
  const name = useInput("Mr.", maxLength);
  return (
    <>
      <h1>Input</h1>
      <input placeholder="Name" {...name}></input>
    </>
  );
};

export default Input;
