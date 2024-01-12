import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NextUIProvider>
        <div className="App">my app</div>
      </NextUIProvider>
    </>
  );
}

export default App;
