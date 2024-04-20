import data from "./data";
import "./style.css";
import { useState } from "react";

export default function Accordion() {
  const [select, setSelect] = useState(null);
  const [multiBtn, setMultiBtn] = useState(false);
  const [selectMulti, setSelectMulti] = useState([]);

  function showText(id) {
    if (select === id) setSelect(null);
    else setSelect(id);
  }
  function handleMulti(id) {
    let cpy = [...selectMulti];
    let index = cpy.indexOf(id);
    if (index === -1) cpy.push(id);
    else cpy.splice(index, 1); //splice(startIndex,removeCount)
    setSelectMulti(cpy);
  }
  console.log(selectMulti);
  return (
    <div>
      <button
        onClick={() => {
          setMultiBtn(!multiBtn);
        }}
      >
        Enable Muliple Selection
      </button>
      {data.map((obj) => {
        return (
          <div
            key={obj.id}
            className="cardd"
            onClick={() => {
              multiBtn ? handleMulti(obj.id) : showText(obj.id);
            }}
          >
            <h3>{obj.title}</h3>
            {multiBtn
              ? selectMulti.includes(obj.id) && <p>{obj.description}</p>
              : select === obj.id && <p>{obj.description}</p>}
          </div>
        );
      })}
    </div>
  );
}
