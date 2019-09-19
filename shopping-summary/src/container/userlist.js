import React from "react";
import { connect } from "react-redux";
import SearchBox from "./Searchbox";
import Cancel from "./Cancel";
import Update from './Update';
import Sorting from './Sorting';

import {cancelHandler,selectHandler,editHandler} from '../actions/listactions';

const Userlist = props => {
//  console.log("porps", props.userReducer.Seachusers, props);
  const user_List = props.userReducer.Seachusers.map(user => {
    return (
      <div key={user.id} onMouseEnter={()=>props.selectHandler(user.id)}>
        <div className="grid">
          <h5>name&nbsp;:&nbsp;{user.username}</h5>
          <Cancel cancelHandler={()=>props.cancelHandler(user.id)}/>
          <Update editHandler={()=>props.editHandler(user.id)}/>
          <p>EmailId&nbsp;:&nbsp;{user.email} </p>
        </div>
      </div>
    );
  });
  return (
    <div className="purchase-card">
      <h2>User List</h2>
      <SearchBox />
<Sorting />
      {user_List}
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps,{cancelHandler,selectHandler,editHandler})(Userlist);
