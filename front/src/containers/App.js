import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
// import Products from "../components/";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
