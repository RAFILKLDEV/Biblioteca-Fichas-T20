/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getUsers } from "../../Firebase";
import Card from "../Card";
import { Search } from "../Search/Search";
import "./main.css";

export const Main = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("Npcs");
  const [select, setSelect] = useState("Todos");

  useEffect(() => {
    getUsers(setUser);
    console.log(user);
  }, []);

  return (
    <main className={"main"}>
      <Search
        bars={{ mode, setMode, select, setSelect }}
        search={{ search, setSearch }}
      />
      <section className={"main__cartas"}>
        {user.map((e, i) => {
          console.log(e.tipo, "tipo");
          if (select !== "Todos") {
            console.log("Caso1");
            if (e.tipo === select) {
              if (search) {
                if (e.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <Card key={e.name + i} name={e.name} email={e.email} />
                  );
                }
              } else
                return <Card key={e.name + i} name={e.name} email={e.email} />;
            } else return null;
          }

          if (search) {
            console.log("Caso2");
            if (e.name.toLowerCase().includes(search.toLowerCase())) {
              return <Card key={e.name + i} name={e.name} email={e.email} />;
            }
          } else return <Card key={e.name + i} name={e.name} email={e.email} />;

          return null;
        })}
      </section>
    </main>
  );
};
