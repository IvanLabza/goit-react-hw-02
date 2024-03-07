import React, { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import valueFeeJson from "./json/valueFee.json";
import valueBtn from "./json/valueBtn.json";
import Notification from "./components/Notification/Notification";

function App() {
  const [selectedValueFee, setSelectedValueFee] = useState(
    JSON.parse(localStorage.getItem("selectedValueFee")) || valueFeeJson
  );
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem("totalClick")) || 0
  );
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    localStorage.setItem("selectedValueFee", JSON.stringify(selectedValueFee));
    setTotal(selectedValueFee);
    calcTotal(selectedValueFee);
  }, [selectedValueFee]);

  useEffect(() => {
    setTotal(() => {
      const keys = Object.keys(selectedValueFee);
      const totalSum = keys.reduce(
        (acc, key) => acc + selectedValueFee[key],
        0
      );
      setTotal(totalSum);
      localStorage.setItem("totalClick", JSON.stringify(totalSum));
    });
  }, [selectedValueFee]);

  const updateFeedback = (feedbackType) => {
    setSelectedValueFee((prevState) => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  const calcTotal = (selectedValueFee) => {
    setPositive((prevState) => {
      const good = selectedValueFee.good;
      const neutral = selectedValueFee.neutral;
      const bad = selectedValueFee.bad;
      const sum = good + neutral + bad;
      prevState = Math.round(((good + neutral) / sum) * 100);
      return prevState;
    });
  };

  const resetTotal = () => {
    setTotal(0);
    setSelectedValueFee(valueFeeJson);
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
