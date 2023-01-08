import React, { useState } from "react";
import { useEffect } from "react";

const TrainedSkills = (props) => {
  const [checkbox, setCheckbox] = useState(false)
  const trained = () => {
    const values = [...props.pericias];

    values[values.findIndex((e) => e.name === props.name)].trained =
      !values[values.findIndex((e) => e.name === props.name)].trained;

    return props.setPericias(values);
  };

  useEffect(() => {
    const values = [...props.pericias]
    setCheckbox(values[values.findIndex((e) => e.name === props.name)].trained)
  })

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
        width: "auto",
      }}
    >
      <span className="ComboLabel-Label">{props.name}</span>
      <input onChange={trained} type="checkbox" checked={checkbox}/>
    </div>
  );
};

export default TrainedSkills;
