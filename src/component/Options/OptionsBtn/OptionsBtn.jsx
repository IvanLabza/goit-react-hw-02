import React from "react";

const OptionsBtn = (props) => {
  const styleBtn = {
    display: "block",
    padding: 10,
    borderRadius: 10,
    background: "#fff",
    color: "#000",
    border: "transparent",
    minWidth: 70,
  };
  return (
    <button style={styleBtn} type="button">
      {props.name}
    </button>
  );
};

export default OptionsBtn;
