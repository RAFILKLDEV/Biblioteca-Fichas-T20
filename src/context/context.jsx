import { useState } from "react";
import { createContext } from "react";

export const T20Context = createContext();

export function T20Provider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <T20Context.Provider value={{ user, setUser }}>
      {children}
    </T20Context.Provider>
  );
}
