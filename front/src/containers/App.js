import React from "react";
import { Route, Switch } from "react-router-dom";
import { RegisterPage } from "../components/RegisterPage";

function App() {
  console.log("renderizo App");
  return (
    <div>
      <Switch>
        <Route exact path="/prueba" component={Prueba} />
        <Route exact path="/signup" component={RegisterPage} />
      </Switch>

      <h1>hola</h1>
    </div>
  );
}

export default App;
