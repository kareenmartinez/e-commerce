import React from "react";
import HeaderContainer from "./HeaderContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer.js";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer";
import LogInContainer from "./LogInContainer";
import ProductContainer from "./ProductContainer";
import { fetchUser } from "../store/actions/userAction";

import store from "../store/store";

import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchUser());
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <hr />

        <br />
        <Switch>
          <Route exact path="/signup" component={RegisterContainer} />
          <Route exact path="/logIn" component={LogInContainer} />
          <Route
            exact
            path="/categories/:country"
            component={FilterCategoryContainer}
          />
          <Route exact path="/" component={ProductsContainer} />
          <Route exact path="/product/:name" component={ProductContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  console.log(state);

  return {
    products: state.filterReducer.productsCategory,
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
