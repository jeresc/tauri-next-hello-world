"use client";
import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

function Button() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="flex">
        <button
          onClick={() => setCounter(counter - 1)}
          className="px-2 text-2xl bg-red-200 text-red-700 rounded-md font-bold "
        >
          -
        </button>
        <span className="text-2xl px-2">{counter}</span>

        <button
          onClick={() => setCounter(counter + 1)}
          className="px-2 text-2xl bg-blue-200 text-blue-700 rounded-md"
        >
          +
        </button>
      </div>

      <button onClick={() => invoke("helloworld")}>Hello World</button>
    </>
  );
}

export default Button;
