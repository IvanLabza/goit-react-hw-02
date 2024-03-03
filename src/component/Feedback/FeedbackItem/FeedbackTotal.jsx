import React from "react";

const FeedbackTotal = ({ positivePercentage }) => {
  const item = {
    display: "flex",
    color: "#fff",
    gap: 8,
  };
  return (
    <li style={item}>
      <span>Total:</span>
      <span>{positivePercentage}%;</span>
    </li>
  );
};

export default FeedbackTotal;
