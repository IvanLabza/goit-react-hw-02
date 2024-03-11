import React from "react";

const FeedbackTotal = ({ totalSum }) => {
  const item = {
    display: "flex",
    color: "#fff",
    gap: 8,
  };
  return (
    <li style={item}>
      <span>Total:</span>
      <span>{totalSum};</span>
    </li>
  );
};

export default FeedbackTotal;
