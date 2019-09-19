import React from "react";
import {connect} from 'react-redux';
import {sortlist} from '../actions/listactions'
const Sorting = ({sortlist}) => {
  const sort = e => {
    console.log("Dropdown selected value", e.target.value);
    sortlist(e.target.value);
  };

  return (
    <div>
      <select onChange={e => sort(e)}>
      <option value="null" selected>Sort..</option>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
};
export default connect(null,{sortlist})(Sorting);
