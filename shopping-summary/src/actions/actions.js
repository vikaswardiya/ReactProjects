import * as data from '../api/api';


export const authenticated = customername => {
  return {
    type: 1,
    action: { customername }
  };
};

export const notauthenticated = ({ customername }) => {
  return {
    type: 2,
    action: { customername }
  };
};

export const RegisterUser = props => {
  return {
    type: 3,
    action: props
  };
};

export const getuserHandler = props => (dispatch, getState) => {
    const ei=data.getData('https://jsonplaceholder.typicode.com/users/').then(res=>{
    console.log("res",res);
    dispatch({
        type: 4,
        action:res
    });
});
}

export const formsubmitHandler = props => (dispatch, getState) => {
  console.log("getState()", getState(),"props",props); 
  const { customername, password, confirmpassword } = props;
  password === confirmpassword
    ? dispatch(authenticated(customername))
    : dispatch(notauthenticated({ customername: "" }));
};

export const formsSignUpHandler = props => (dispatch, getState) => {
  console.log("SignUp form", props);
  const { password, confirmpassword } = props;
  password === confirmpassword
    ? dispatch(RegisterUser(props))
    : dispatch(notauthenticated({ customername: "" }));
};
