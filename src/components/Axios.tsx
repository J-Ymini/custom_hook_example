import React, { useState, useEffect } from "react";
import { useAxios } from "src/hooks";

const Axios = () => {
  const { loading, error, data } = useAxios("/mock/data.json");
  console.log(data?.name);

  return (
    <>
      <h1>Axios</h1>
      <div>name: {data?.name}</div>
      <div>age: {data?.age}</div>
      <div>yongmin: {data?.position}</div>
    </>
  );
};

export default Axios;
