import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { updatedata, handleChangeAction } from "../actions/actions";

const UpdateForm = props => {
  const handleChange = e => {
    props.handleChangeAction({ [e.target.name]: e.target.value });
  };

  const OnFromSubmit = e => {
    e.preventDefault();
    props.updatedata(props.updateuser);
  };

  const username = props.updateuser.username ? props.updateuser.username : "";
  const email = props.updateuser.email ? props.updateuser.email : "";

  const form = props.updateuser.username ? (
    <div className="purchase-card right">
      <form onSubmit={e => OnFromSubmit(e)}>
        <Row className="show-grid">
          <Col md={4}>
            <label>UserName</label>
          </Col>
          <Col md={8}>
            <input
              type="text"
              placeholder="Customer"
              name="username"
              onChange={handleChange}
              id="customer"
              value={username}
            ></input>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={4}>
            <label>Email</label>
          </Col>
          <Col md={8}>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChange}
              id="email"
              value={email}
            ></input>
          </Col>
        </Row>
        <button type="submit">Submit</button>
      </form>
    </div>
  ) : null;

  return <div>{form}</div>;
};

const mapStateToProps = state => ({
  ...state.editReducer,
  ...state.userReducer
});

export default connect(
  mapStateToProps,
  { updatedata, handleChangeAction }
)(UpdateForm);
