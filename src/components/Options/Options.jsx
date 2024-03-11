import React from "react";
import css from "./Options.module.css";
import OptionsBtn from "./OptionsBtn/OptionsBtn";
import OptionsReset from "./OptionsBtn/OptionsReset";

const Options = ({ nameBtn, updateFeedback, totalSum, resetTotal }) => {
  return (
    <div>
      <ul className={css.navList}>
        {nameBtn.map((item, index) => (
          <li key={index}>
            <OptionsBtn
              name={item.name}
              updateFeedback={() => updateFeedback(item.name)}
            />
          </li>
        ))}
        {totalSum > 0 ? <OptionsReset resetTotal={resetTotal} /> : null}
      </ul>
    </div>
  );
};

export default Options;
