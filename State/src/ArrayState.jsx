import React, { useState } from "react";

export default function ArrayState() {
  const [arrays, setArrays] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="m-10">
      <h1 className="text-xl font-bold">Array : {arrays.join(" ")} </h1>
      <button
        className={`border-2 border-black rounded px-2 mt-1  text-neutral-50 ${
          arrays.length == 0 ? "bg-[#F40606]" : "bg-[#06C05C]"
        }`}
        onClick={() =>
          setArrays(() => {
            return arrays.filter((items, index) => index != arrays.length - 1);
          })
        }
        // onClick={() => setArrays([...arrays, arrays.length + 1])}
      >
        Remove Array Elements
      </button>

      <button
        className={`border-2 border-black rounded px-2 mt-1 mx-4 text-neutral-50 ${
          arrays.length == 0 ? "bg-[#F40606]" : "bg-[#06C05C]"
        }`}
        onClick={() => setArrays([...arrays, arrays.length + 1])}
      >
        Add Array Elements
      </button>

      <button
        className="border-2 border-black rounded px-2 mt-1 bg-[#0545EA]  text-neutral-50"
        onClick={() =>
          setArrays(() => {
            return arrays.filter((item, index) => index != 5);
          })
        }
      >
        Remove 5th index Element
      </button>

      <button
        className="border-2 border-black rounded px-2 mx-4 mb-2 text-neutral-50 bg-[#007D8E]"
        onClick={() =>
          setArrays(() => {
            return arrays.filter((item, index) => item % 2 == 0);
          })
        }
      >
        Remove Odd Elements
      </button>
      <hr />
    </div>
  );
}
