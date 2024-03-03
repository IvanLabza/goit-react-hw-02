import React from "react";

const OptionsReset = ({ setHideFee }) => {
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
    <button style={styleBtn} onClick={() => setHideFee(false)} type="button">
      reset
    </button>
  );
};

export default OptionsReset;
