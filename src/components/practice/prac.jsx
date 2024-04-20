import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Practice() {
  const [currentID, setcurrentID] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  const showAnswer = (getID) => {
    if (getID === currentID) {
      setcurrentID(null);
    } else setcurrentID(getID);
  };
  function handleMulti(id) {
    let cpy = [...multiple];
    let bool = cpy.includes(id);
    // console.log(bool);
    if (bool) {
      cpy = cpy.filter((item) => {
        return item !== id;
      });
    } else cpy.push(id);
    setMultiple(cpy);
  }
  return (
    <div className="contain">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>
      {data.map(function (text) {
        return (
          <div
            key={text.id}
            className="accordionCard"
            onClick={() => {
              multiSelection ? handleMulti(text.id) : showAnswer(text.id);
            }}
          >
            <h3>{text.question}</h3>
            {multiSelection
              ? multiple.includes(text.id) && <p>{text.answer}</p>
              : currentID === text.id && <p>{text.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
