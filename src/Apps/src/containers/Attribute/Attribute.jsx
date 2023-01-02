import React from "react";
import AttributeStat from "../../components/AttributeStat/AttributeStat";
import "./styles.css";

export function Attribute(props) {
  const attributes = ["FOR", "DES", "CON", "INT", "SAB", "CAR"];

  return (
    <div className="Attribute">
      <div className="Monster-Attribute">
        {attributes.map((e) => (
          <AttributeStat
            key={e}
            name={e}
            att={props.att}
            setAtt={props.setAtt}
          />
        ))}
      </div>
    </div>
  );
}
