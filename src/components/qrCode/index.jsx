import { useRef, useState } from "react";
import QRCode from "react-qr-code";
export default function QrCodeGenerator() {
  const [code, setCode] = useState("");
  const inputVal = useRef(); // useRef returns an object with a single property "current". "current" can store any jsx element.
  return (
    <div>
      <div>
        <input ref={inputVal} type="text" placeholder="Enter a link or text" />
        <button
          onClick={() => {
            setCode(inputVal.current.value);
            inputVal.current.value = "";
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode value={code} bgColor="white" />
      </div>
    </div>
  );
}
