import React from "react";
import "./App.css";
import Wellcome from "./container/Wellcome";
import LoginForm from "./container/LoginForm";
import Userlist  from './container/userlist';
import SignupFormcontainer from "./container/SignupForm";
import UpdateUser from './container/UpdateForm';
import Details from './container/Details';


const App = () => {
  return (
    <div className="container">
      <Details />
      <Userlist />
      <div className="purchase-card">
        <LoginForm>
          <Wellcome />
        </LoginForm>
      </div>
      <SignupFormcontainer>
        <Wellcome />
      </SignupFormcontainer>
      <UpdateUser />
    </div>
  );
};

export default App;
