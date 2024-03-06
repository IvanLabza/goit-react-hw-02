import React from "react";

const OptionsBtn = ({ name, updateFeedback, handleClicks }) => {
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
    <button
      style={styleBtn}
      onClick={() => {
        updateFeedback(name);
      }}
      type="button"
    >
      {name}
    </button>
  );
};

export default OptionsBtn;
