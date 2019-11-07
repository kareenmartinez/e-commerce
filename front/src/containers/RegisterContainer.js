import React, { Component } from "react";
import { connect } from "react-redux";
import Register from "../components/Register";
import { fetchRegister } from "../store/actions/registerAction";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      direction: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleSubmit(event) {
    console.log("ENTRO AL BOTON");
    event.preventDefault();
    this.props
      .createUser([
        this.state.name,
        this.state.email,
        this.state.password,
        this.state.lastName,
        this.state.direction
      ])
      .then(() => {
        this.props.history.push("/login");
      });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleChangeDirection(event) {
    this.setState({ direction: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { name, lastName, direction, email, password } = this.state;
    return (
      <div>
        <Register
          handleSubmit={this.handleSubmit}
          handleChangeName={this.handleChangeName}
          handleChangeLastName={this.handleChangeLastName}
          handleChangeDirection={this.handleChangeDirection}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePassword={this.handleChangePassword}
          name={name}
          lastname={lastName}
          direction={direction}
          email={email}
          password={password}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    createUser: register => dispatch(fetchRegister(register))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
