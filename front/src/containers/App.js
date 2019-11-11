import React from "react";
import { Switch, Route } from "react-router-dom";
import FilterCategoryContainer from "../containers/FilterCategoryContainer.jsx";
import Header from "../components/Header.jsx";
import LogInContainer from "../containers/LogInContainer";
import { RegisterPage } from "../components/RegisterPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/logIn" component={LogInContainer} />
          <Route
            exact
            path="/categories/:country"
            component={FilterCategoryContainer}
          />
          <Route exact path="/signup" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
