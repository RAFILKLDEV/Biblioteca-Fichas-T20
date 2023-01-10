import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Home } from "./pages/Home/Home";
import { MonsterApp } from "./pages/MonsterApp/MonsterApp";
import { NotFound } from "./pages/NotFound/NotFound";
import { NpcApp } from "./pages/NpcApp/NpcApp";
import { T20Provider } from "./context/context";
import "./index.css";

export function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/monster",
      element: <MonsterApp />,
    },
    {
      path: "/npc",
      element: <NpcApp />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <T20Provider>
      <RouterProvider router={router} />
    </T20Provider>
  );
}
