const initstate = {
  total: 100,
  pickupSavings: 3.25,
  isAuthenticated: false,
  customername: "",
  page: 1
};

const rootReducer = (state = initstate, action) => {
  switch (action.type) {
    case 1:
       {
           console.log("case 1 is executed",action.type,action); 
      return {
        ...state,
        isAuthenticated:true,
        customername:action.action.customername
      };
    }
    case 2:{
      console.log("case 2 is executed",action.type,action); 
      return {
        ...state,
        isAuthenticated:false,
        customername:action.action.customername
      }
    }
    case 3:{
      return{
        ...state,
        action
      }
    }
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;
