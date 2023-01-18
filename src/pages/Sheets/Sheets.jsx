import { ref, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { getOneUser, storage } from "../../Firebase";
import "./styles.css";

export function Sheets() {
  const [user, setUser] = useState();
  const [toggleList, setToggleList] = useState(false);
  const [progress, setProgress] = useState(false);
  const [img, setImg] = useState(null);
  const [sheet, setSheet] = useState({});

  console.log(sheet);

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

  function handleUpload(e) {
    e.preventDefault();

    const file = e.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `Fichas/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  return (
    <div className="Sheets">
      <Header />
      <div className="Sheets-Main">
        <h1>Fichas de {user?.user.apelido}</h1>
        <div className="Sheets-Toggle">
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
        {toggleList ? (
          <div className="Sheets-List">
            <List user={user} />
          </div>
        ) : (
          <div className="Sheets-Upload">
            {progress ? (
              <progress value={progress} max={100} width="300" />
            ) : (
              <form className="Sheets-Form" onSubmit={handleUpload}>
                <input type="file" />
                <div className="Sheets-Label">
                  <input
                    className="Sheets-Name"
                    type="text"
                    value={sheet?.name}
                    placeholder="Nome..."
                    onBlur={(e) => {
                      const values = sheet;
                      values.name = e.target.value;
                      setSheet(values);
                    }}
                  />
                  <input
                    className="Sheets-Nd"
                    type="text"
                    value={sheet?.nd}
                    placeholder="Nd..."
                    onBlur={(e) => {
                      const values = sheet;
                      values.nd = e.target.value;
                      setSheet(values);
                    }}
                  />
                </div>
                <img
                  src={
                    "https://cdn.discordapp.com/attachments/896108335059841114/1044319058209808454/unknown.png"
                  }
                  alt={"img"}
                />
                <button type="submit">Enviar</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
