import { useEffect, useState } from "react";
import "./style.css";

export const RandomColor = () => {
  const [color, setColor] = useState();
  const [rgbc, setRgbc] = useState(false);
  const [hexc, setHexC] = useState(false);

  function generateColor() {
    if (rgbc) {
      let a = Math.ceil(Math.random() * 100);
      let b = Math.ceil(Math.random() * 190);
      let c = Math.ceil(Math.random() * 216);
      let rgb = `rgb(${a},${b},${c})`;
      console.log(rgb);
      setColor(rgb);
    } else {
      const hex = "ABCDEF0123456789";
      let hexCode = "#";
      for (let i = 0; i < 6; i++) {
        let random = Math.random() * 10;

        hexCode += hex[Math.ceil(random)];
      }
      setColor(hexCode);
    }
  }
  return (
    <div className="body" style={{ backgroundColor: color }}>
      <div className="content">
        <button
          onClick={() => {
            setRgbc(true);
            setHexC(false);
          }}
        >
          Generate RGB values
        </button>
        <button
          onClick={() => {
            setHexC(true);
            setRgbc(false);
          }}
        >
          Generate Hex values
        </button>
        <button onClick={generateColor}>Generate random color</button>
        <h2>{color}</h2>
      </div>
    </div>
  );
};
