import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { getOneUser } from "../../Firebase";
import "./styles.css";

export function Sheets() {
  const [user, setUser] = useState();
  const [toggleList, setToggleList] = useState(false);

  useEffect(() => {
    getOneUser(setUser, localStorage.getItem("User"));
  }, []);

  console.log(user);

  function List(props) {
    return (
      <div>
        <img src={props.user.sheet?.img} alt={props.user.sheet?.sheet} />
        <div>
          <div>
            <div>Name</div>
            <div>ND</div>
          </div>
          <div>Tabela</div>
        </div>
      </div>
    );
  }

  return (
    <div className="Sheets">
      <Header />
      <div className="Sheets-Main">
        <h1>Fichas de {user?.user.apelido}</h1>
        <div className="Sheets-Toggle">
          <div>
            <button
              onClick={() => {
                setToggleList(false);
              }}
            >
              Upload Ficha
            </button>
            <button
              onClick={() => {
                setToggleList(true);
              }}
            >
              Lista
            </button>
          </div>
        </div>
        {toggleList ? (
          <div className="Sheets-List">
            <List user={user} />
          </div>
        ) : (
          <div className="Sheets-Upload">Upload</div>
        )}
      </div>
    </div>
  );
}
