import { useState } from "react";
import "./tabs.css";

export default function Tabs({ tabs, onChange }) {
  const [currentIn, setCurrentIn] = useState(0);
  function handleClick(getIndex) {
    setCurrentIn(getIndex);
    onChange(getIndex + 1);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabs && tabs.length > 0
          ? tabs.map((tabItem, index) => {
              return (
                <span
                  className="label"
                  key={tabItem.label}
                  onClick={() => handleClick(index)}
                >
                  {tabItem.label}
                </span>
              );
            })
          : null}
      </div>
      <h3 className="content">{tabs[currentIn].content}</h3>
    </div>
  );
}
