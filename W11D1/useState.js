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



import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setToggleOne(!toggleOne);
  };
  const handleClick2 = () => {
    setToggleTwo(!toggleTwo);
  };
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, [toggleOne]);
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
      <button onClick={handleClick}>ToggleOne</button>
      <button onClick={handleClick2}>ToggleTwo</button>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default Main;
