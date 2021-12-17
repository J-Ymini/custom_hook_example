import React from "react";

import Input from "src/components/Input";
import Tab from "src/components/Tab";
import Title from "src/components/Title";
import Click from "src/components/Click";
import Confirm from "./components/Confirm";
import Scroll from "./components/Scroll";
import FullScreen from "./components/FullScreen";
import Axios from "./components/Axios";

function App() {
  return (
    <>
      <Input />
      <Tab />
      <Title />
      <Click />
      <Confirm />
      <FullScreen />
      {/* <Scroll /> */}
      <Axios />
    </>
  );
}

export default App;
