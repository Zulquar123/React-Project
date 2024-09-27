import React, { createContext, useState } from "react";
export const UserContext = createContext();
export default function Context(props) {
  const data = [
    {
      id: 1,
      email: "Zulquar@gmail.com",
      username: "Zulquar@123",
      password: "m38rmF$",
    },
    {
      id: 2,
      email: "Zeeshan@gmail.com",
      username: "Zeeshan@786",
      password: "83r5^#",
    },
    {
      id: 3,
      email: "Jalal150@gmail.com",
      username: "Jalal@0341",
      password: "$2r5^#",
    },
  ];

  const [user, setUser] = useState(data);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
