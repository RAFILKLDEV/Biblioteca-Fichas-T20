import React, { useState } from "react";
import "./styles.css";

export function Menu({ name, children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="Menu">
      <div className="Menu-Bar">
        <button onClick={() => setToggle(!toggle)}>{name}</button>
        {toggle ? (
          <i className="fa fa-arrow-down" aria-hidden="true" />
        ) : (
          <i className="fa fa-arrow-right" aria-hidden="true" />
        )}
      </div>
      <div className="Menu-Children">{toggle && children}</div>
    </div>
  );
}
