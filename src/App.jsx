import React, { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import valueFeeJson from "./json/valueFee.json";
import valueBtn from "./json/valueBtn.json";
import Notification from "./components/Notification/Notification";

function App() {
  const [selectedValueFee, setSelectedValueFee] = useState(
    JSON.parse(localStorage.getItem("selectedValueFee")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem("totalClick")) || 0
  );
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    localStorage.setItem("selectedValueFee", JSON.stringify(selectedValueFee));
    localStorage.setItem("totalClick", JSON.stringify(total));
  }, [selectedValueFee, total]);

  useEffect(() => {
    const totalSum = Object.values(selectedValueFee).reduce(
      (acc, val) => acc + val,
      0
    );
    setTotal(totalSum);
    const positiveFeedback = Math.round(
      ((selectedValueFee.good + selectedValueFee.neutral) / totalSum) * 100
    );
    setPositive(positiveFeedback);
  }, [selectedValueFee]);

  const updateFeedback = (feedbackType) => {
    setSelectedValueFee((prevState) => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  const resetTotal = () => {
    setSelectedValueFee({ good: 0, neutral: 0, bad: 0 });
    setTotal(0);
    setPositive(0);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Description />
        <Options
          total={total}
          nameBtn={valueBtn}
          updateFeedback={updateFeedback}
          resetTotal={resetTotal}
        />

        {total > 0 ? (
          <Feedback item={selectedValueFee} total={total} positive={positive} />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}
export default App;
