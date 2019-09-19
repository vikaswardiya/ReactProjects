import React from "react";

const Cancel = ({ cancelHandler }) => {
  return (
    <span className="cancelbtn">
      <a onClick={cancelHandler}>X</a>
    </span>
  );
};

export default Cancel;
