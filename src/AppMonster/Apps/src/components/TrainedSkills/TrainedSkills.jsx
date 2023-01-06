import React from "react";

const TrainedSkills = (props) => {
  const trained = () => {
    const values = [...props.pericias];

    values[values.findIndex((e) => e.name === props.name)].trained =
      !values[values.findIndex((e) => e.name === props.name)].trained;

    return props.setPericias(values);
  };

  console.log("kek");

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
      <input onChange={trained} type="checkbox" />
    </div>
  );
};

export default TrainedSkills;
