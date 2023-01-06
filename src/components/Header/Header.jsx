/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOneUser } from "../../Firebase";
import "./styles.css";

const Header = (props) => {
  const [info, setInfo] = useState([]);

  if (!props.user) {
    props.setUser(localStorage.getItem("User"));
  }

  useEffect(() => {
    getOneUser(setInfo, props.user);
  }, []);

  return (
    <div className="Header">
      <Link className="Header-Title" to={"/home"}>
        Biblioteca T20{" "}
        <img
          src="https://styles.redditmedia.com/t5_18ls5s/styles/communityIcon_mlfvhpke64a51.png?width=256&s=8a96b9eab3ee16a30e33774808a685a79c273180"
          alt=""
          width={30}
          height={30}
        />
      </Link>
      <Link className="Header-Title" to={"/npc"}>
        Npcs
      </Link>
      <Link className="Header-Title" to={"/monster"}>
        Monster
      </Link>
      <div className="Header-Title">{info.user?.apelido}</div>
    </div>
  );
};

export default Header;
