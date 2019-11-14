import React, { Component } from "react";
import LogIn from "../components/LogIn";
import { logIn } from "../store/actions/userAction";

import { connect } from "react-redux";

class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    this.props.history.push("/");
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    return (
      <div>
        <LogIn
          onSubmit={this.onSubmit}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (email, password) => dispatch(logIn(email, password))
  };
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
