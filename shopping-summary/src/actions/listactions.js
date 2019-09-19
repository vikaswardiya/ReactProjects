import * as data from "../api/api";

export const getuserHandler = props => (dispatch, getState) => {
  data.getData("https://jsonplaceholder.typicode.com/users/").then(res => {
    dispatch({
      type: 4,
      action: res
    });
  });
};

export const sortlist= typ=>(dispatch,getState)=>{
    let Seachusers=getState().userReducer.Seachusers;
    dispatch({type:typ,action:Seachusers});
  }
  

export const SearchHandler = e => (dispatch, getState) => {
    console.log(e.target.value,getState().userReducer.users);
  const users = getState().userReducer.users.filter(user => {
    return (
      user.username.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
    );
  });
  console.log("users",users);
  dispatch(searchaction(users));
};

export const cancelHandler = id => (dispatch, getState) => {
  const Seachusers = getState().userReducer.Seachusers.filter(user => {
    return user.id !== id;
  });
  console.log("delete use",Seachusers);
  alert("are you sure ?")
  
  dispatch(deleteuser(Seachusers))
};

const deleteuser = Seachusers => {
  return {
    type: "DELETE_DATA",
    action: Seachusers
  };
};
const searchaction = data => {
  return {
    type: "SEARCH_DATA",
    action: data
  };
};



export const editHandler = id => (dispatch, getState) => {
  const updateuser = getState().userReducer.Seachusers.filter(user => {
    return user.id === id;
  })[0];

  return dispatch({
    type: "EDIT_USER",
    action: updateuser
  });
};

export const selectHandler = id => (dispatch, getState) => {
  const selecteduser = getState().userReducer.Seachusers.filter(user => {
    return user.id === id;
  });

  return dispatch({
    type: "SELECT_USER",
    action: selecteduser
  });
};
