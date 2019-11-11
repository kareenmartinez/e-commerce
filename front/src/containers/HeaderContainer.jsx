import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { fetchProduct } from "../store/actions/searchAction";
import { withRouter } from "react-router";
//me permite usar el history

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      userState: ""
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
    console.log(this.props.userState);
    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
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
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);
