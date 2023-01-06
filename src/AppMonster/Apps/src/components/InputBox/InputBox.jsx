import React, { useState } from "react";
import { useRef } from "react";
import "./styles.css";

export function InputBox(props) {
  const [input, setInput] = useState("");
  const [name, setName] = useState(props.placeholder);
  const textBox = useRef();

  return (
    <div className="Mst-InputBox">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome..."
      />
      <textarea
        className="TextBox"
        onChange={() => {
          textBox.current.style.height = "22px";
          textBox.current.style.height = `${
            textBox.current.scrollHeight - 13
          }px`;
        }}
        ref={textBox}
        defaultValue={input}
        onBlur={(e) => setInput(e.target.value)}
        placeholder="Descrição"
      ></textarea>
    </div>
  );
}
