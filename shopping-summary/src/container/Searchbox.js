import React from "react";
import { connect } from "react-redux";
import { SearchHandler } from "../actions/listactions";

const SearchBox = ({ SearchHandler }) => {
  return (
    <div>
      <input onChange={SearchHandler} placeholder=" Search..."></input>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { SearchHandler }
)(SearchBox);
