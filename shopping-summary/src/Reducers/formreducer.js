// const initstate = { users: [], Seachusers: [] };

const initstate = {
  customername: "",
  password: "",
  confirmpassword: ""
};

const userReducer = (state = initstate, action) => {
  console.log(action, "state:", state);
  switch (action.type) {
    case "FORMDATA": {
      return {
        ...state,
        action
      };
    }
   
    default:
      return {
        ...state
      };
  }
};

export default userReducer;
