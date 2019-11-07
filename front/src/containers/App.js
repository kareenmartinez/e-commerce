import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer";
import LogInContainer from "./LogInContainer";

class App extends React.Component {
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
          <Route exact path="/products" component={ProductsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
