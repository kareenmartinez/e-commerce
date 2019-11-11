import React from "react";
import HeaderContainer from "./HeaderContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer.js";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer.jsx";
import LogInContainer from "./LogInContainer";
import ProductContainer from "./ProductContainer";

class App extends React.Component {
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

export default App;
