import { useEffect, useState } from "react";

export default function useLocalStorage(key, val) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || val;
  }); // initializer function. reactjs fires this method during mounting/rerender and sets the initial value of the state equal to the return value of the initializer function.
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}
