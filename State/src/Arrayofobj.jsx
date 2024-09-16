import React, { useState } from "react";

export default function Arrayofobj() {
  const [arrayObj, setArrayobj] = useState([
    { name: "Zulquar", age: 38 },
    { name: "Zeeshan", age: 28 },
    { name: "Khusboo", age: 33 },
    { name: "Sahista", age: 30 },
  ]);

  return (
    <div className="mx-10 text-xl font-bold">
      {arrayObj.map((item) => (
        <div>
          <span>{item.name} = </span>
          <span>{item.age} </span>
        </div>
      ))}

      <button
        className="border-2 border-black rounded px-4"
        onClick={() =>
          setArrayobj(() => {
            return arrayObj.map((item) =>
              item.name == "Zulquar" ? { name: "Zulquar", age: 34 } : item
            );
          })
        }
      >
        Update Age ➡️
      </button>
    </div>
  );
}
