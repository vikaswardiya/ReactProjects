import React from "react";
import "./App.css";
import Wellcome from "./container/Wellcome";
import LoginForm from "./container/LoginForm";
import Userlist  from './container/userlist';
import SignupFormcontainer from "./container/SignupForm";


const App = () => {
  return (
    <div className="container">
      <Userlist />
      <div className="purchase-card">
        <LoginForm>
          <Wellcome />
        </LoginForm>
      </div>
      <SignupFormcontainer>
        <Wellcome />
      </SignupFormcontainer>
    </div>
  );
};

export default App;
