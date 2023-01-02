import React, { useState } from "react";
import "./styles.css";

export function InputBox(props) {
  const [input, setInput] = useState("");
  const [name, setName] = useState(props.placeholder);

  return (
    <div className="InputBox">
      <div>
        <b>{name}</b>
        {" " + input}
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome..."
      />
      <textarea
        onChange={(e) => setInput(e.target.value)}
        placeholder="Descrição"
      ></textarea>
    </div>
  );
}
