import React, { Component } from "react";
import LogIn from "../components/LogIn";
import { logIn } from "../store/actions/userAction";

import { connect } from "react-redux";
<<<<<<< HEAD
import { withRouter } from "react-router";
=======
>>>>>>> aa36e3e846cfc987cfe6cb4e281960eb89351f93

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
<<<<<<< HEAD
    this.props.logIn(this.state.email, this.state.password).then(res => {
      this.props.history.push("/");
    });
  }
=======
    console.log(this.state.email, this.state.password);
    this.props.logIn(this.state.email, this.state.password)

  };

>>>>>>> aa36e3e846cfc987cfe6cb4e281960eb89351f93
  handleEmail(e) {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    console.log(e.target.value);
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

<<<<<<< HEAD
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogInContainer)
);
=======
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInContainer);
>>>>>>> aa36e3e846cfc987cfe6cb4e281960eb89351f93
