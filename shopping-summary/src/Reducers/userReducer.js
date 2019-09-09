const initstate ={users:[]} 
  
  const userReducer = (state = initstate, action) => {
    switch (action.type) {
      case 3:{
          console.log("user reducer ",state,action)
          let users = state.users.map(a => {return {...a}})
          users.push(action.action)
        return{
            users
        }
      }
      default:
        return {
          ...state
        };
    }
  };
  
  export default userReducer;
  