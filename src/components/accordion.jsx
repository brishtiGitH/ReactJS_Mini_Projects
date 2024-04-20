import { useState } from "react";
import "../App.css";

const Accordion = (props) => {
  const [show, setShow] = useState(false);
  function showText() {
    setShow(!show);
  }
  return (
    <div className="card">
      <p onClick={() => showText(props.id)}>
        <b>{props.first}</b>
      </p>
      {show && <p>{props.second}</p>}
    </div>
  );
};
export { Accordion };
