import React from "react";
import Header from "../components/Header.jsx";
import LogInContainer from "../containers/LogInContainer";
import { Route, Switch } from "react-router-dom";
import { RegisterPage } from "../components/RegisterPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/logIn" component={LogInContainer} />

          <Route exact path="/signup" component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
