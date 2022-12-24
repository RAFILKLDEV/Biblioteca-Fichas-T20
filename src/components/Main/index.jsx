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
  }, []);

  return (
    <main className={"main"}>
      <Search
        bars={{ mode, setMode, select, setSelect }}
        search={{ search, setSearch }}
      />
      <section className={"main__cartas"}>
        {user.map((e, i) => {
          if (select !== "Todos") {
            if (e.tipo === select) {
              if (search) {
                if (
                  e.user.apelido.toLowerCase().includes(search.toLowerCase())
                ) {
                  return (
                    <Card
                      key={e.user.apelido + i}
                      name={e.user.apelido}
                      email={e.user.email}
                    />
                  );
                }
              } else
                return (
                  <Card
                    key={e.user.apelido + i}
                    name={e.user.apelido}
                    email={e.user.email}
                  />
                );
            } else return null;
          }

          if (search) {
            if (e.user.apelido.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Card
                  key={e.user.apelido + i}
                  name={e.user.apelido}
                  email={e.user.email}
                />
              );
            }
          } else
            return (
              <Card
                key={e.user.apelido + i}
                name={e.user.apelido}
                email={e.user.email}
              />
            );
        })}
      </section>
    </main>
  );
};
