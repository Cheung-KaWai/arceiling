import "./App.css";
import { isAndroid, isIOS } from "react-device-detect";

function App() {
  const renderContent = () => {
    if (isAndroid) {
      return <p>Hello Android</p>;
    }
    if (isIOS) {
      return <p>Hello Iphone</p>;
    }
    return <p>not detected</p>;
  };

  return (
    <div>
      <h1>Test</h1>
      {renderContent()}
    </div>
  );
}

export default App;
