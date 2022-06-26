import React from "react";

const BurgerIcon = ({ clickHandler, open }) => {
  return (
    <div className={`nav-icon ${open ? "open" : ""}`} onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
