import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const Details = ({ selecteduser }) => {
 // console.log("Selet div component", selecteduser);
  const user = selecteduser[0];
  const userdiv =
    selecteduser.length > 0 ? (
      <div>
        <h5>{selecteduser[0].username}</h5>
        <p>
          WebSite:&nbsp;{selecteduser[0].website}
          <br />
          Email:&nbsp;{selecteduser[0].email}
          <br />
          Phone:&nbsp;{selecteduser[0].phone}
        </p>
      </div>
    ) : (<span>Select user to see Details</span>);

  return <div className="card right">{userdiv}</div>;
};

const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps)(Details);
