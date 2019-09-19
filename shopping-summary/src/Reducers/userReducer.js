const initstate = { users: [], Seachusers: [], selecteduser: [],TOGGLE:false };

const userReducer = (state = initstate, action) => {
  switch (action.type) {
    case 3: {
      console.log("user 3 reducer ", state, action);
      let users = state.users.map(a => {
        return { ...a };
      });
      users.push(action.action);
      return {
        ...state,
        users
      };
    }
    case 4: {
      console.log("get user",state,action);
      let users = state.users.map(a => {
        return { ...a };
      });
      action.action.forEach(d => {
        users.push(d);
      });
      let Seachusers = [...users];
      return {
        ...state,
        users,
        Seachusers
      };
    }
    case "UPDATE_USERS": {
       console.log("response data",state,action);
 
      let users=action.action;
 
      let Seachusers = [...users];
      return {
        ...state,
        users,
        Seachusers
      };
    }
    case "SEARCH_DATA": {
      //    console.log("search action", action);
      let Seachusers = action.action.map(a => {
        return { ...a };
      });
      return {
        ...state,
        Seachusers
      };
    }
    case "DELETE_DATA": {
      //    console.log("search action", action);
      let Seachusers = action.action.map(a => {
        return { ...a };
      });
      return {
        ...state,
        Seachusers
      };
    }
    case "SELECT_USER": {
      //  console.log("SELECT_USER");
      let selecteduser = action.action.map(a => {
        return { ...a };
      });
      return {
        ...state,
        selecteduser
      };
    }
    case "TOGGLE": {
      console.log("TOGGLE",state);
    //  const TOGGLE=!state.TOGGLE
      return {
        ...state,
        TOGGLE:!state.TOGGLE
      };
    }
    case "ASC": {
      console.log("TOGGLE",action.action);
let Seachusers=[...action.action];
console.log("Seachusers sorted",Seachusers.sort((a, b) => (a.username > b.username) ? 1 : -1));
    //  const TOGGLE=!state.TOGGLE
      return {
        ...state,
        Seachusers:Seachusers
      };
    }
    case "DESC": {
      console.log("TOGGLE",action.action);
      let Seachusers=[...action.action];
console.log("Seachusers sorted desc",Seachusers.sort((a, b) => (a.username < b.username) ? 1 : -1));

      return {
        ...state,
        Seachusers:Seachusers
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default userReducer;
