import "./App.css";
import { isAndroid, isIOS } from "react-device-detect";
import glbFile from "./assets/tal.glb";
import usdz from "./assets/test.usdz";
import image from "./assets/tal.jpg";
import styled from "styled-components";

function App() {
  const renderContent = () => {
    if (isAndroid) {
      return (
        <>
          <p>Hello Android</p>;
          <model-viewer
            src={glbFile}
            ar
            ar-modes="webxr"
            camera-controls
            poster={image}
            shadow-intensity="1"
          ></model-viewer>
        </>
      );
    }
    if (isIOS) {
      return (
        <>
          <p>Hello Iphone</p>
          <a rel="ar" href={usdz}>
            <ImgStyled src={image} />
          </a>
        </>
      );
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

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
`;
