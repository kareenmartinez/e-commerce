import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer";
import LogInContainer from "./LogInContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={FilterCategoryContainer} />
          <Route exact path="/logIn" component={LogInContainer} />
          <Route exact path="/products" component={ProductsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
