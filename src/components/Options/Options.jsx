import React from "react";
import css from "./Options.module.css";
import OptionsBtn from "./OptionsBtn/OptionsBtn";
import OptionsReset from "./OptionsBtn/OptionsReset";

const Options = ({ nameBtn, handleOptionClick, showTotal, setHideFee }) => {
  return (
    <div>
      <ul className={css.navList}>
        {nameBtn.map((item, index) => (
          <li key={index}>
            <OptionsBtn
              name={item.name}
              onClick={() => {
                handleOptionClick(item.name);
                setHideFee(true);
              }}
            />
          </li>
        ))}
        {showTotal && <OptionsReset setHideFee={setHideFee} />}
      </ul>
    </div>
  );
};

export default Options;
