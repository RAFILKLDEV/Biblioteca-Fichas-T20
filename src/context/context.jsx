import { useState } from "react";
import { createContext } from "react";

export const T20Context = createContext();

export function T20Provider({ children }) {
  const [user, setUser] = useState(null);
  const [infoSave, setInfoSave] = useState({});
  const [statsSave, setStatsSave] = useState({});
  const [attSave, setAttSave] = useState({});
  const [skillsSave, setSkillsSave] = useState({});
  const [combatSave, setCombatSave] = useState({});

  console.log(infoSave);

  return (
    <T20Context.Provider
      value={{
        user,
        setUser,
        setInfoSave,
        setStatsSave,
        setAttSave,
        setSkillsSave,
        setCombatSave,
      }}
    >
      {children}
    </T20Context.Provider>
  );
}
