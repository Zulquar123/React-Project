import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const nav =
    "flex gap-5 justify-center text-4xl bg-black text-white font-bold mt-0 w-1/2 m-auto mt-2 rounded-2xl";
  const style = (e) => {
    return {
      color: e.isActive ? "tomato" : "",
      border: e.isActive ? "2px solid tomato" : "",
      borderRadius: e.isActive ? "10px" : "",
      padding: e.isActive ? "2px 6px" : "",
    };
  };
  return (
    <nav className={nav}>
      <NavLink style={style} to="/">
        Home
      </NavLink>
      <NavLink style={style} to="/user">
        User
      </NavLink>
      <NavLink style={style} to="/about">
        About
      </NavLink>
    </nav>
  );
}
