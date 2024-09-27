import React, { useState } from "react";
import Home from "./Component/Home";
import Nav from "./Component/Nav";
import Routing from "./Component/Routing";

export default function App() {
  return (
    <>
      <Nav />
      <Routing />
      {/* <h1>{JSON.stringify(user)}</h1> */}
    </>
  );
}
