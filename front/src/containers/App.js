import React from "react";
import Header from "../components/Header.jsx"
import LogInContainer from "../containers/LogInContainer"

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/logIn" component={LogInContainer} />

        </Switch>



      </div>
    );
  }
}

export default App;
