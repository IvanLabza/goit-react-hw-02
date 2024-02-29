import React, { useState } from "react";
import Description from "./component/Description/Description";
import Feedback from "./component/Feedback/Feedback";
import Options from "./component/Options/Options";
import valueFeeJson from "./json/valueFee.json";
import valueBtn from "./json/valueBtn.json";

function App() {
  const [selectedValueFee, setSelectedValueFee] = useState(valueFeeJson);

  const handleOptionClick = (optionName) => {
    const updatedValues = selectedValueFee.map((item) => {
      const name = Object.keys(item)[0];
      const value = item[name];
      if (name === optionName) {
        return { [name]: value + 1 };
      }
      return item;
    });
    setSelectedValueFee(updatedValues);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Description />
        <Options handleOptionClick={handleOptionClick} nameBtn={valueBtn} />
        <Feedback item={selectedValueFee} />
      </div>
    </div>
  );
}

export default App;
