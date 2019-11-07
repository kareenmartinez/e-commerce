import React from "react";
import { Switch, Route } from "react-router-dom";
import FilterCategoryContainer from "../containers/FilterCategoryContainer.jsx";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={FilterCategoryContainer} />
      </Switch>
    );
  }
}

export default App;
