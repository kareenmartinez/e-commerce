import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { searchData } from "../store/actions/searchAction";

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
    this.props.mostrarBusqueda(this.state);
    console.log("se apreto el boton");
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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    mostrarBusqueda: item => {
      dispatch(searchData(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
