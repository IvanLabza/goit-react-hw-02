import React from "react";

const FeedbackTotal = ({ total }) => {
  const item = {
    display: "flex",
    color: "#fff",
    gap: 8,
  };
  return (
    <li style={item}>
      <span>Total:</span>
      <span>{total};</span>
    </li>
  );
};

export default FeedbackTotal;
