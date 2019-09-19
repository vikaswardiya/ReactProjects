import React from "react";
import Loginform from "../components/Loginform/Loginform";
import { connect } from "react-redux";
import * as formsmethods from "../actions/actions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

const LoginForm = props => {
  const dispatch = useDispatch();

  const LoginForm = (
    <div>
      <Loginform OnFromSubmit={state => props.formsubmitHandler(state)} toggle={()=>dispatch({ type: "TOGGLE"})}/>
      {props.children}
    </div>
  );

  return <div>{LoginForm}</div>;
};

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators(formsmethods, dispatch) };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
