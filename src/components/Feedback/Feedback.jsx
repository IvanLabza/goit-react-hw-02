import React from "react";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import css from "./Feedback.module.css";
import FeedbackTotal from "./FeedbackItem/FeedbackTotal";

const Feedback = ({ item, total, positive }) => {
   const itemStyle = {
     display: "flex",
     color: "#fff",
     gap: 8,
   };
  return (
    <ul className={css.list}>
      {item.map((element, index) => {
        const key = Object.keys(element)[0];
        const value = element[key];
        return <FeedbackItem key={index} name={key} value={value} />;
      })}
      {total > 0 ? (
        <>
          <FeedbackTotal total={total} />
          <li style={itemStyle}>
            <span>Positive:</span>
            <span>{positive}%;</span>
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default Feedback;
