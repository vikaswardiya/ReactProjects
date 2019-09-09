import React from "react";
import { connect } from "react-redux";

const Wellcome = ({ isAuthenticated, customername }) => {
  const wellcome = isAuthenticated ? (
    <div>wellcome {customername}</div>
  ) : (
    <div>User is not authenticated</div>
  );

  return <div>{wellcome}</div>;
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Wellcome);
