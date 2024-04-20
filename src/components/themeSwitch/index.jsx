import { useEffect, useState } from "react";
import "./styles.css";

export default function LightDarkTheme() {
  //   const [val, setVal] = useLocalStorage();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  function update() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div id="themecontainer" className={theme === "light" ? "light" : "dark"}>
      <h1>Hello World!</h1>
      <button onClick={update}>change theme</button>
    </div>
  );
}
