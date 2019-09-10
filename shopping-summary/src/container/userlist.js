import React from "react";
import { connect } from "react-redux";
import SearchBox from '../container/Searchbox';

const Userlist = props => {
  console.log("porps", props.userReducer.Seachusers, props);
  const user_List = props.userReducer.Seachusers.map(user => {
    return (
      <div className="" key={user.id}>
        <div className="grid">
          <h4>name&nbsp;{user.username}</h4>
          <p>EmailId {user.email}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="purchase-card">
      <h2>User List</h2>
      <SearchBox />
      {user_List}
    </div>
  );
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Userlist);
