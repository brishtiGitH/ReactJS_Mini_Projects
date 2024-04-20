import { useEffect, useState } from "react";
import "./theme.css";
import useLocalStorage from "./useLocalStorage";

export const Theme = () => {
  const [theme, setTheme] = useLocalStorage("page-theme", "light");
  function updateTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div data-theme={theme} className="theme-container">
      <h1>Hello World!</h1>
      <button onClick={updateTheme}>Change Theme</button>
    </div>
  );
};
