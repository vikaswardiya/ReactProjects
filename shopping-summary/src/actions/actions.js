

export const authenticated = customername => {
  return {
    type: 1,
    action: { customername }
  };
};


export const handleChangeAction = data => (dispatch, getState) => {
  dispatch({ type: "ONCHANGE", action: data });
};


export const updatedata = data => (dispatch, getState) => {
  let Seachusers = getState().userReducer.Seachusers.map(user => {
    return user.id === data.id ? data : user;
  });

  return dispatch({
    type: "UPDATE_USERS",
    action: Seachusers
  });
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



export const formsubmitHandler = props => (dispatch, getState) => {
  const { customername, password, confirmpassword } = props;
  password === confirmpassword
    ? dispatch(authenticated(customername))
    : dispatch(notauthenticated({ customername: "" }));
};



export const formsSignUpHandler = props => (dispatch, getState) => {
  const { password, confirmpassword } = props;
  password === confirmpassword
    ? dispatch(RegisterUser(props))
    : dispatch(notauthenticated({ customername: "" }));
};
