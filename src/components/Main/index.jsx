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
  const [select, setSelect] = useState("");

  console.log("kek");

  useEffect(() => {
    getUsers(setUser);
    console.log(user);
  }, []);

  return (
    <main className={"main"}>
      <Search search={{ search, setSearch }} />
      <section className={"main__cartas"}>
        {user.map((e, i) => {
          if (e.name.toLowerCase().includes(search.toLowerCase())) {
            return <Card key={e.name + i} name={e.name} email={e.email} />;
          }
          return null;
        })}
      </section>
    </main>
  );
};
