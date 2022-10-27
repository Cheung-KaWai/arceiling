import "./App.css";
import { isAndroid, isIOS } from "react-device-detect";

function App() {
  return (
    <div>
      {isAndroid ?? <h1>android</h1>}
      {isIOS ?? <h1>ios</h1>}
    </div>
  );
}

export default App;
