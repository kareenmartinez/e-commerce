import React from "react";
import Header from "../components/Header.jsx";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer";
import ProductsContainer from "./ProductsContainer";
import FilterCategoryContainer from "./FilterCategoryContainer";
import LogInContainer from "./LogInContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/signup" component={RegisterContainer} />
          <Route exact path="/" component={FilterCategoryContainer} />
          <Route exact path="/logIn" component={LogInContainer} />
          <Route exact path="/products" component={ProductsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
