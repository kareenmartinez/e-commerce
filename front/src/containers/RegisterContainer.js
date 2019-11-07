import React, { Component } from "react";
import { connect } from "react-redux";
import Register from "../components/Register";

class RegisterContainer extends Component {
  render() {
    return <Register />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
