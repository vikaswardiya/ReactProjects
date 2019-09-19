const initstate = { updateuser: { username: "" } };

const editReducer = (state = initstate, action) => {
  switch (action.type) {
    case "EDIT_USER": {
      let updateuser = action.action;
      console.log("EDIT_USER", updateuser, state);
      return {
        ...state,
        updateuser
      };
    }
    case "ONCHANGE": {
      const up = action.action;
      const key = Object.keys(up)[0];
      const value = up[key];
      const updateuser = { ...state.updateuser, [key]: value };
      return {
        ...state,
        updateuser
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default editReducer;
