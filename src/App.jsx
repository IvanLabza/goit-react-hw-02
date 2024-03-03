import React, { useEffect, useState } from "react";
import Description from "./component/Description/Description";
import Feedback from "./component/Feedback/Feedback";
import Options from "./component/Options/Options";
import valueFeeJson from "./json/valueFee.json";
import valueBtn from "./json/valueBtn.json";
import NoFeedbeck from "./component/NoFeedbeck/NoFeedbeck";

function App() {
  const [selectedValueFee, setSelectedValueFee] = useState(
    JSON.parse(localStorage.getItem("selectedValueFee")) || valueFeeJson
  );
  const [showTotal, setShowTotal] = useState(false);
  const [hideFee, setHideFee] = useState(true);

  const [positivePercentage, setPositivePercentage] = useState(0);

  const localClick = localStorage.setItem(
    "selectedValueFee",
    JSON.stringify(selectedValueFee)
  );

  useEffect(() => {
    setSelectedValueFee((prevState) =>
      prevState.map((item) => ({ ...item, count: 0 }))
    );
  }, [hideFee]);


  useEffect(() => {
    const totalFeedback = selectedValueFee.reduce(
      (total, item) => total + item.count,
      0
    );
    const goodCount = selectedValueFee.find(
      (item) => item.type === "good"
    ).count;
    const neutralCount = selectedValueFee.find(
      (item) => item.type === "neutral"
    ).count;

    const percentage = Math.round(
      ((goodCount + neutralCount) / totalFeedback) * 100
    );

    setPositivePercentage(percentage);
  }, [selectedValueFee]);

  const updateFeedback = (feedbackType) => {
    setSelectedValueFee((prevState) => {
      return prevState.map((item) => {
        if (item.type === feedbackType) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
    setShowTotal(true);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Description />
        <Options
          handleOptionClick={updateFeedback}
          showTotal={showTotal}
          nameBtn={valueBtn}
          setHideFee={setHideFee}
        />
        {hideFee ? (
          <Feedback
            item={selectedValueFee}
            positivePercentage={positivePercentage}
            showTotal={showTotal}
          />
        ) : (
          <NoFeedbeck />
        )}
      </div>
    </div>
  );
}

export default App;
