import React, { useContext, useEffect } from "react";
import Mana from "../../components/Mana/Mana";
import ComboLabel from "../../components/ComboLabel/ComboLabel";
import ComboPericia from "../../components/ComboPericia/ComboPericia";
import Speed from "../../components/Speed/Speed";
import ComboSavingThrow from "../../components/ComboSavingThrow/ComboSavingThrow";
import { T20Context } from "../../../../../context/context";
import "./styles.css";

export function Stats(props) {
  const { setStatsSave } = useContext(T20Context);

  useEffect(() => {
    setStatsSave({});
  }, []);

  return (
    <div className="Stats">
      {/* // 0 Indice 1 B.ATA 2 Dano.M 3 Defesa 4 R.FORTE 5 R.MEDIA 6 R.FRACA 7 PV 8 CD */}
      <div className="Monster-Stats">
        <ComboPericia
          name="Iniciativa"
          att={props.att}
          nd={props.nd}
          pericias={props.pericias}
        />
        <ComboPericia
          name="Percepção"
          att={props.att}
          nd={props.nd}
          pericias={props.pericias}
        />
      </div>
      <div className="Monster-Defense">
        <ComboLabel name="Defesa" nd={props.nd} n={3} />
        <ComboSavingThrow name="Fort" nd={props.nd} />
        <ComboSavingThrow name="Ref" nd={props.nd} />
        <ComboSavingThrow name="Von" nd={props.nd} />
      </div>
      <div className="Monster-Hp">
        <ComboLabel name="Pontos de Vida" nd={props.nd} n={7} />
      </div>
      <div className="Monster-Extras">
        {props.extras[1].marked && <Mana name="Mana" nd={props.nd} n={7} />}
        {props.extras[0].marked && <ComboLabel name="CD" nd={props.nd} n={8} />}
      </div>
      <div className="Monster-Speed">
        <Speed />
      </div>
    </div>
  );
}
