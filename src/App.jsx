import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { isAndroid, isIOS } from "react-device-detect";

function App() {
  return (
    <div>
      if(isAndroid){<h1>Android</h1>}
      if(isIOS){<h1>Iphone</h1>}
    </div>
  );
}

export default App;
