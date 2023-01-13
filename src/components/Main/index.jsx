/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { getUsers, storage } from "../../Firebase";
import Card from "../Card";
import { Search } from "../Search/Search";
import "./main.css";

export const Main = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("Npcs");
  const [select, setSelect] = useState("Todos");
  const [img, setImg] = useState("");

  function gerarImg() {
    getDownloadURL(ref(storage, "Fichas/squirtle.jpg")).then((url) => {
      setImg(url);
      console.log(url);
    });
  }

  useEffect(() => {
    getUsers(setUser);
    gerarImg();
  }, []);

  return (
    <main className={"main"}>
      <Search
        bars={{ mode, setMode, select, setSelect }}
        search={{ search, setSearch }}
      />
      <section className="main__cartas">
        <h1>Usuarios Cadastrados: {user.length}</h1>
      </section>
      <section className="main__cartas">
        <h1>Fichas</h1>
        {user.map((e) => {
          if (e.sheets?.img) {
            return <img src={e.sheets?.img} alt="squirtlekkkk" />;
          }
        })}
      </section>
      {/* <section className={"main__cartas"}>
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
      </section> */}
    </main>
  );
};
