import React from "react";

import { useTabs } from "src/hooks";

const Tab = () => {
  const {
    currentItem: { content },
    changeItem,
  } = useTabs(1, CONTENTS);

  console.log();

  return (
    <>
      <h1>Tab</h1>
      {CONTENTS.map((element, index) => {
        const { tab } = element;
        console.log(index);
        return (
          <>
            <button
              key={index}
              onClick={() => {
                changeItem(index);
              }}
            >
              {tab}
            </button>
          </>
        );
      })}
      <div>{content}</div>
    </>
  );
};

export default Tab;

const CONTENTS = [
  { tab: "Section1", content: "I'm the content of the Section1" },
  { tab: "Section2", content: "I'm the content of the Section2" },
];
