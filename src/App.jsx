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
    const sum = selectedValueFee.reduce((acc, item) => {
      const key = Object.keys(item)[0];
      const totalClick = acc + item[key];
      localStorage.setItem("totalClick", JSON.stringify(totalClick));
      return totalClick;
    }, 0);
    setTotal(sum);
  }, [selectedValueFee]);

  const updateFeedback = (feedbackType) => {
    setSelectedValueFee((prevState) => {
      return prevState.map((item) => {
        const key = Object.keys(item)[0];
        if (key === feedbackType) {
          return {
            ...item,
            [key]: item[key] + 1,
          };
        }
        return item;
      });
    });
  };

  const calcTotal = (selectedValueFee) => {
    setPositive((prevState) => {
      const good = selectedValueFee[0].good;
      const neutral = selectedValueFee[1].neutral;
      const bad = selectedValueFee[2].bad;
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
