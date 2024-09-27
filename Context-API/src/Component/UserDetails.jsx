import React, { useContext } from "react";
import { UserContext } from "./Context";
import { useNavigate, useParams } from "react-router-dom";

export default function UserDetails() {
  const style = "px-4 py-4 bg-sky-200 rounded-xl font-bold";
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="w-1/2 m-auto mt-10 flex gap-4 flex-col items-center">
      <h1 className={style}>UserName : {user[id - 1].username}</h1>
      <h1 className={style}>Email Id : {user[id - 1].email}</h1>
      <h1 className={style}>Password : {user[id - 1].password}</h1>
      <button
        onClick={() => navigate(-1)}
        className="rounded border-2 border-sky-500 px-3"
      >
        Go Back
      </button>
    </div>
  );
}
