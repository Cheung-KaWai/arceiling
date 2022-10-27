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
          <p>Hello Android</p>
          <model-viewer src={glbFile} ar ar-modes="webxr" camera-controls shadow-intensity="1">
            {/* <div class="progress-bar hide" slot="progress-bar">
              <div class="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
              View in your space
            </button>
            <div id="ar-prompt">
              <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
            </div> */}
          </model-viewer>
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

  return <div>{renderContent()}</div>;
}

export default App;

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
`;
