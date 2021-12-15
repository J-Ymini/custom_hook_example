import React from "react";

import { useConfirm } from "src/hooks";

const Confirm = () => {
  const deleteWord = () => {
    console.log("삭제중");
  };
  const abortDelete = () => {
    console.log("삭제하지 않습니다.");
  };
  const confirmDelete = useConfirm(
    "정말 삭제하시겠습니까?",
    deleteWord,
    abortDelete
  );

  return (
    <>
      <h1>Confirm</h1>
      <button onClick={confirmDelete}>Delete word</button>
    </>
  );
};

export default Confirm;
