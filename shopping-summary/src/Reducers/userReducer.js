const initstate ={users:[],Seachusers:[]} 
  
  const userReducer = (state = initstate, action) => {
    switch (action.type) {
      case 3:{
          console.log("user reducer ",state,action)
          let users = state.users.map(a => {return {...a}})
          users.push(action.action)
         
        return{
          ...state,
            users
           
        }
      }
      case 4:{
          console.log("response data",state,action);
          let users = state.users.map(a => {return {...a}})
          action.action.forEach(d=>{
            users.push(d);
          })
          let Seachusers=[...users];
          return{
            ...state,
              users,
              Seachusers
          }
      }
    case 5:{
      console.log("searhc action",action);
      let Seachusers = action.action.map(a => {return {...a}})
return{
  ...state,
  Seachusers
}
    }
      default:
        return {
          ...state
        };
    }
  };
  
  export default userReducer;
  