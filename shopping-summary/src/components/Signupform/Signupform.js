import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

class Signupform extends Component {
  state = {
    customername: "",
    password: "",
    confirmpassword: "",
    EmailId: ""
  };

  handleChange = item => e => {
    this.setState({ [item]: e.target.value });
  };

  OnFromSubmit = e => {
    e.preventDefault();
    this.props.OnFromSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.OnFromSubmit(e)}>
          <Row className="show-grid">
            <Col md={4}>
              <label>CustomerName</label>
            </Col>
            <Col md={8}>
              <input
                type="text"
                placeholder="Customer"
                onChange={e => this.handleChange("customername")(e)}
                value={this.state.customername}
                id="customer"
              ></input>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={4}>
              <label>Email Id</label>
            </Col>
            <Col md={8}>
              <input
                type="text"
                placeholder="EmailId"
                onChange={e => this.handleChange("EmailId")(e)}
                value={this.state.EmailId}
                id="EmailId"
              ></input>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={4}>
              <label>Password</label>
            </Col>
            <Col md={8}>
              <input
                type="text"
                placeholder="Roll is password"
                onChange={e => this.handleChange("password")(e)}
                value={this.state.password}
              ></input>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={4}>
              <label>Confirm Password</label>
            </Col>
            <Col md={8}>
              <input
                type="text"
                placeholder="Confirm password"
                onChange={e => this.handleChange("confirmpassword")(e)}
                value={this.state.confirmpassword}
              ></input>
            </Col>
          </Row>
          <button type="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    customername: state.customername,
    page: state.page
  };
};

export default connect(mapStateToProps)(Signupform);
