import React from "react";
import css from "./Options.module.css";
import OptionsBtn from "./OptionsBtn/OptionsBtn";

const Options = ({ nameBtn, handleOptionClick }) => {
  const handleClick = (optionName) => {
    handleOptionClick(optionName);
  };

  return (
    <div>
      <ul className={css.navList}>
        {nameBtn.map((item, index) => (
          <li key={index}>
            <OptionsBtn
              onClick={() => handleClick(item.name)}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
