import React from "react";

const Update = ({editHandler}) => {
  return (
    <span className="cancelbtn">
    <a onClick={editHandler}> 
      Edit
      </a>
    </span>
  );
};

export default Update;
