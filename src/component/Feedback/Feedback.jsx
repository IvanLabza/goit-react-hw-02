import React from "react";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import css from "./Feedback.module.css";
import FeedbackTotal from "./FeedbackItem/FeedbackTotal";

const Feedback = ({ item, positivePercentage, showTotal }) => {
  return (
    <ul className={css.list}>
      {item.map((element, index) => {
        return (
          <FeedbackItem key={index} name={element.type} value={element.count} />
        );
      })}
      {showTotal && (
        <div>
          <FeedbackTotal positivePercentage={positivePercentage} />
        </div>
      )}
    </ul>
  );
};

export default Feedback;
