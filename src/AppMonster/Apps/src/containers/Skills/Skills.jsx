import React from "react";
import ComboPericia from "../../components/ComboPericia/ComboPericia";
import "./styles.css";

export function Skills(props) {
  function Trained() {
    let valor = props.pericias.findIndex((e) => e.trained);
    if (valor === -1) {
      return false;
    } else return true;
  }

  return (
    Trained() && (
      <div className="Skills">
        <div className="ComboLabel-Label">Pericias: </div>
        <div className="Monster-Skills">
          <div>
            {props.pericias.map((e) => {
              if (e.trained) {
                return (
                  <ComboPericia
                    key={e.name}
                    name={e.name}
                    nd={props.nd}
                    att={props.att}
                    pericias={props.pericias}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    )
  );
}

