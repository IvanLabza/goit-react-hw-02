import React from "react";
import css from "./Options.module.css";
import OptionsBtn from "./OptionsBtn/OptionsBtn";
import OptionsReset from "./OptionsBtn/OptionsReset";

const Options = ({
  nameBtn,
  updateFeedback,
  hide,
  resetLocal,
  handleClicks,
}) => {
  return (
    <div>
      <ul className={css.navList}>
        {nameBtn.map((item, index) => (
          <li key={index}>
            <OptionsBtn
              name={item.name}
              updateFeedback={() => updateFeedback(item.name)}
              handleClicks={handleClicks}
            />
          </li>
        ))}
        {hide ? <OptionsReset resetLocal={resetLocal} /> : null}
      </ul>
    </div>
  );
};

export default Options;
