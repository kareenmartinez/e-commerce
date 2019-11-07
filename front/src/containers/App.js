import React from "react";
import Header from "../components/Header.jsx";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "./RegisterContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/signup" component={RegisterContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
