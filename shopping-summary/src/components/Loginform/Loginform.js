import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Loginform extends Component {
  state = {
    customername: "",
    password: "",
    confirmpassword: ""
  };

  handleChange = item => e => {
    this.setState({ [item]: e.target.value });
  };

  OnFromSubmit = e => {
    e.preventDefault();
    console.log("this state", this.state);
    this.props.OnFromSubmit(this.state);
  };

  signupform = () => {
    console.log("toglle");
    this.props.toggle();
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
          <button type="submit">Login Form</button>
          <a onClick={this.signupform} className="btn">SignUP</a>
        </form>
      </div>
    );
  }
}

export default Loginform;
