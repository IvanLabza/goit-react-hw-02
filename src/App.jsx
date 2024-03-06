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
  const [total, setTotal] = useState(0);
  const [hide, setHide] = useState(true);
  const [clicks, setClick] = useState(
    JSON.parse(localStorage.getItem("clicks")) || 0
  );

  const handleClicks = () => {
    setClick((clicks) => {
      clicks = +1;
      localStorage.setItem("clicks", JSON.stringify(clicks));
    });
  };

  useEffect(() => {
    localStorage.setItem("selectedValueFee", JSON.stringify(selectedValueFee));
    totalFee(selectedValueFee);
  }, [selectedValueFee]);

  const resetLocal = () => {
    localStorage.removeItem("selectedValueFee");
    setSelectedValueFee((prevState) => {
      return prevState.map((item) => {
        return { ...item, count: (item.count = 0) };
      });
    });
    localStorage.removeItem("clicks");
    setClick(0);
  };

  useEffect(() => {
    if (clicks === 0) {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [handleClicks]);

  const updateFeedback = (feedbackType) => {
    setSelectedValueFee((prevState) => {
      return prevState.map((item) => {
        if (item.type === feedbackType) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  const totalFee = (selectedValueFee) => {
    setTotal((prevState) => {
      const good = selectedValueFee[0].count;
      const neutral = selectedValueFee[1].count;
      const bad = selectedValueFee[2].count;
      const sum = good + neutral + bad;
      prevState = Math.round(((good + neutral) / sum) * 100);
      return prevState;
    });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Description />
        <Options
          nameBtn={valueBtn}
          hide={hide}
          updateFeedback={updateFeedback}
          resetLocal={resetLocal}
          handleClicks={handleClicks}
        />
        {hide ? (
          <Feedback item={selectedValueFee} hide={hide} total={total} />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}

export default App;
