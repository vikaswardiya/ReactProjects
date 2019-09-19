import React from "react";
import { connect } from "react-redux";
import Wellcome from "../container/Wellcome";
import * as formsmethods from "../actions/actions";
import Signupform from "../components/Signupform/Signupform";


import { bindActionCreators } from "redux";


const SignupFormcontainer = props => {
  console.log("props",props);
  const SignupFormdiv = props.isAuthenticated ? null : (
    <div className="purchase-card">
      <Signupform OnFromSubmit={state => props.formsSignUpHandler(state)} />
      <Wellcome />
    </div>
  );
  
  const toggleform=props.TOGGLE?(SignupFormdiv):(null)


  return <div>{toggleform}</div>;
};

const mapStateToProps = state => ({
      ...state.rootReducer,
      ...state.userReducer    
  });

const mapDispatchToProps = dispatch => {
    return { ...bindActionCreators(formsmethods, dispatch) };
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(SignupFormcontainer);
