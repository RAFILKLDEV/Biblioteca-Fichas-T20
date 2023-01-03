import React, { useState } from "react";
import "./styles.css";

const ComboPericia = (props) => {
  const [extra, setExtra] = useState(0);

  function calcNd() {
    if (props.nd === 0 || props.nd === 1) {
      return 0;
    }
    return props.nd - 1;
  }

  function calcPericia() {
    const result = props.pericias.findIndex((e) => e.name === props.name);
    return props.pericias[result].mod;
  }

  return (
    <div className="ComboPericia">
      <span className="ComboLabel-Label">{props.name} :&nbsp;</span>
      <div className="ComboLabel-Input">
        <div>
          {Math.floor(calcNd() / 2) + props.att[calcPericia()] + Number(extra)}
        </div>
        <input
          type="number"
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          onFocus={() => {
            document.body.style.overflow = "hidden";
          }}
          onBlur={() => {
            document.body.style.overflow = "auto";
          }}
        />
      </div>
    </div>
  );
};

export default ComboPericia;
