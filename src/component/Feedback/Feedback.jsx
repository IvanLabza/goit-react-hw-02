import React from "react";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import css from "./Feedback.module.css";

const Feedback = ({ item }) => {
  return (
    <ul className={css.list}>
      {item.map((element, index) => {
        const name = Object.keys(element)[0];
        const value = element[name];
        return <FeedbackItem key={index} name={name} value={value} />;
      })}
    </ul>
  );
};

export default Feedback;
