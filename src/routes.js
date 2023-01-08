import React, { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Home } from "./pages/Home/Home";
import { MonsterApp } from "./pages/MonsterApp/MonsterApp";
import "./index.css";
import { NotFound } from "./pages/NotFound/NotFound";
import { NpcApp } from "./pages/NpcApp/NpcApp";

export function Routes() {
  const userContext = createContext();
  const [saveMonster, setSaveMonster] = useState({})
  const [user, setUser] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage setUser={setUser} />,
    },
    {
      path: "/home",
      element: <Home user={user} setUser={setUser} />,
    },
    {
      path: "/monster",
      element: <MonsterApp user={user} setUser={setUser} save={setSaveMonster} />,
    },
    {
      path: "/npc",
      element: <NpcApp user={user} setUser={setUser}/>,
    },
    {
      path: "*",
      element: <NotFound setUser={setUser} />,
    },
  ]);

  return (
    <userContext.Provider value={(user, setUser)}>
      <RouterProvider router={router} user={{ user, setUser }} />
    </userContext.Provider>
  );
}
