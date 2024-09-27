import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useContext(UserContext);
  const style = " px-4 py-4 bg-sky-200 rounded-xl font-bold";
  return (
    <div className="w-1/2 m-auto mt-10  flex gap-3 flex-col">
      {user.map((u) => (
        <Link className={style} to={`/user/${u.id}`}>
          {u.username}
        </Link>
      ))}
    </div>
  );
}
