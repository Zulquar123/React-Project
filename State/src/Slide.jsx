import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Slide() {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-[#515453] flex justify-center items-center ">
      <div className=" relative w-96 h-52 rounded-lg bg-[#AF7503] flex overflow-hidden ">
        <img
          className={`w-full h-full object-cover shrink-0 duration-300 transition-transform ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://plus.unsplash.com/premium_photo-1673697239936-c2599b0b0498?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`w-full h-full object-cover shrink-0 duration-300 transition-transform ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />

        <span
          className="w-10 h-10 bg-[#dadada8b] flex justify-center items-center rounded-full absolute left-[50%] top-[50%] 
               -translate-x-[50%] -translate-y-[50%]"
          onClick={() => setVal(() => !val)}
        >
          <FaLongArrowAltRight size={"1.3em"} />
        </span>
      </div>
    </div>
  );
}
