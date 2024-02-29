import React from "react";

const FeedbackItem = ({ name, value }) => {
  const item = {
    display: "flex",
    color: "#fff",
    gap: 8,
  };
  return (
    <li style={item}>
      <span>{name}:</span>
      <span>{value};</span>
    </li>
  );
};

export default FeedbackItem;
