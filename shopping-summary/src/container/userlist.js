import React from "react";
import { connect } from "react-redux";


const Userlist = (props) => {

    console.log("porps",props.userReducer.users);
    const user_List=props.userReducer.users.map(user=>{
       return (<div>{user.customername}</div>);
    });
  return (<div className="purchase-card">
      User List is here
      {user_List}
        </div>);
};





const mapStateToProps = state => ({
    ...state    
});

export default connect(mapStateToProps)(Userlist);



