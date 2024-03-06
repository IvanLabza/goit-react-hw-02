import React from "react";

const OptionsReset = ({ resetLocal }) => {
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
    <button style={styleBtn} onClick={resetLocal} type="button">
      reset
    </button>
  );
};

export default OptionsReset;
