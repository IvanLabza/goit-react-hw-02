import React, { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import valueFeeJson from "./json/valueFee.json";
import valueBtn from "./json/valueBtn.json";
import Notification from "./components/Notification/Notification";
function App() {
  const [feedbackState, setFeedbackState] = useState(
    () =>
      JSON.parse(localStorage.getItem("feedbackState")) || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(feedbackState));
  }, [feedbackState]);

  const totalSum = Object.values(feedbackState).reduce(
    (acc, val) => acc + val,
    0
  );
  const positiveFeedback = Math.round(
    ((feedbackState.good + feedbackState.neutral) / totalSum) * 100
  );

  const updateFeedback = (feedbackType) => {
    setFeedbackState((prevState) => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  const resetTotal = () => {
    setFeedbackState({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Description />
        <Options
          totalSum={totalSum}
          nameBtn={valueBtn}
          updateFeedback={updateFeedback}
          resetTotal={resetTotal}
        />

        {totalSum > 0 ? (
          <Feedback
            item={feedbackState}
            totalSum={totalSum}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}
export default App;
