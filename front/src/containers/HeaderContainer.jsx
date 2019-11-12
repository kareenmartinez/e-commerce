import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { fetchProduct } from "../store/actions/searchAction";
import { withRouter } from "react-router";
import { logout } from "../store/actions/logoutAction";
//me permite usar el history

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.search);
    this.props.mostrarBusqueda(this.state.search);
    this.props.history.push(`/product/${this.state.search}`);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
          logout={this.props.logout}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => {
  return {
    mostrarBusqueda: item => {
      dispatch(fetchProduct(item));
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);
