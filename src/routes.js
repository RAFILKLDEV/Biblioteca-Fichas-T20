import React, { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App/App";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import "./index.css";

export function Routes() {
  const userContext = createContext();
  const [user, setUser] = useState({});
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage setUser={setUser} />,
    },
    {
      path: "/home",
      element: <App user={user} />,
    },
  ]);

  return (
    <userContext.Provider value={(user, setUser)}>
      <RouterProvider router={router} user={{ user, setUser }} />
    </userContext.Provider>
  );
}
