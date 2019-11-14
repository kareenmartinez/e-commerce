import React from "react";
import HeaderContainer from "./HeaderContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer.js";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer";
import LogInContainer from "./LogInContainer";
import ProductContainer from "./ProductContainer";

import { fetchUser } from "../store/actions/userAction";
import OrderContainer from "./OrderContainer";
import store from "../store/store";

import { fetchAddress, fetchOrder } from "../store/actions/orderAction";

import { connect } from "react-redux";

import { fetchUserFacebook } from "../store/actions/facebookAction";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
    // this.props.fetchOrder(this.props.user.id);

    console.log(fetchUser);

    // store.dispatch(fetchUserFacebook(this.props.userFacebook));
    // store.dispatch(fetchAddress(this.props.address));

    console.log(this.props.user.id);
    console.log("----------------------------------------------");
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <hr />

        <br />
        <Switch>
          <Route exact path="/" component={ProductsContainer} />
          <Route exact path="/signup" component={RegisterContainer} />
          <Route exact path="/logIn" component={LogInContainer} />
          <Route
            exact
            path="/categories/:country"
            component={FilterCategoryContainer}
          />
          <Route exact path="/order/:userId" component={OrderContainer} />
          <Route exact path="/product/:name" component={ProductContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: () => {
      dispatch(fetchOrder());
    },
    fetchUser: () => dispatch(fetchUser())
  };
};

const mapStateToProps = state => {
  return {
    userFacebook: state.facebookReducer.payload,
    address: state.orderReducer.address,
    user: state.userReducer.user,
    order: state.orderReducer.order
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
