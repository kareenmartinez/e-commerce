import React from "react";
import HeaderContainer from "./HeaderContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer.js";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer.jsx";
import LogInContainer from "./LogInContainer";
import ProductContainer from "./ProductContainer";

import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {

    this.setState({ user: this.props.user })
    console.log(this.state.user)
  }
  render() {
    return (
      <div>
        <HeaderContainer />
        <hr />

        <br />
        <Switch>
          <Route exact path="/signup" component={RegisterContainer} />
          {/* <Route exact path="/" component={FilterCategoryContainer} /> */}
          <Route exact path="/logIn" component={LogInContainer} />
          <Route
            exact
            path="/categories/:country"
            component={FilterCategoryContainer}
          />
          <Route exact path="/" component={ProductsContainer} />
          <Route exact path="/product" component={ProductContainer} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.userReducer.payload, "holaaaa kareen")
  return {
    user: state.userReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
