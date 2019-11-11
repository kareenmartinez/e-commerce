import React, { Component } from "react";
import LogIn from "../components/LogIn";
import { logIn } from "../store/actions/userAction";

import { connect } from "react-redux";

class LogInContainer extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.email, this.state.password)
        this.props.logIn(this.state.email, this.state.password)

    }
    handleEmail(e) {

        console.log(e.target.value)
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {

        console.log(e.target.value)
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div>
                <LogIn onSubmit={this.onSubmit} handleEmail={this.handleEmail} handlePassword={this.handlePassword} />


            </div>
        )
    }
=======
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
    console.log(this.state.email, this.state.password);
    this.props.logIn(this.state.email, this.state.password).then(res => {
      console.log(res);
      this.props.history.push("/products");
    });
  }
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
>>>>>>> 93489add3e3e748a9c40e49f970647329ead6300
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInContainer);
