import React, { useEffect, useState } from "react";
import { getUsers } from "./Firebase";

export default function AppTeste() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getUsers(setusers);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Informações</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {users.map((e, i) => (
          <div key={e.name + i}>
            <div>Nome: {e.name}</div>
            <div>Email: {e.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
