import { useState } from "react";
import hexToRgb from "./utils/hexToRgb";
import rgbToCmyk from "./utils/rgbToCmyk";
import rgbToHls from "./utils/rgbToHls";
import rgbToHex from "./utils/rgbToHex";
import cmykToRgb from "./utils/cmykToRgb";
import hlsToRgb from "./utils/hlsToRgb";
import MultipleNumberInput from "./components/MultipleNumberInput";

function App() {
  const [color, setColor] = useState("#000000");

  const rgb = hexToRgb(color);
  const cmyk = rgbToCmyk(rgb);
  const hls = rgbToHls(rgb);

  const onRgbChange = (rgb) => {
    setColor(rgbToHex(rgb));
  } 

  const onCmykChange = (cmyk) => {
    setColor(rgbToHex(cmykToRgb(cmyk)))
  }

  const onHlsChange = (hls) => {
    setColor(rgbToHex(hlsToRgb(hls)))
  }

  return (
    <div className="container">
      <input type='color' onChange={(e) => setColor(e.target.value)} value={color}/>
      <div>
        <MultipleNumberInput 
          title="CMYK" 
          inputs={[{label: "C"}, {label: "M"}, {label: "Y"}, {label: "K"}]}
          value={cmyk}
          onChange={onCmykChange}
        />
        <MultipleNumberInput 
          title="RGB" 
          inputs={[{label: "R", type: "", max: 255}, {label: "G", type: "", max: 255}, {label: "B", type: "", max: 255}]}
          value={rgb}
          onChange={onRgbChange}
        />
        <MultipleNumberInput 
          title="HLS" 
          inputs={[{label: "H", type: "°", max: 360}, {label: "L"}, {label: "S"}]}
          value={hls}
          onChange={onHlsChange}
        />
      </div>
    </div>
  )
}

export default App
