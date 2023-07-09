import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const showAlert = () => {
    let defaultValue = 0;
    if (count === 0) {
      window.alert("Can't go below zero");
      setCount(defaultValue);
    }
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`state ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>UseState Component</h1>
      <button
        onClick={(e) => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        onClick={(e) => {
          setTheme("light");
        }}
      >
        Light
      </button>
      <h2>{count}</h2>
      <button onClick={(e) => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button
        onClick={(e) => {
          setCount((prevCount) => prevCount - 1);
          showAlert();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;

