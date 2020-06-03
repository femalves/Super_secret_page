import React from "react";
import "./App.css";

import Header from "./components/header/header";
import Secret from "./pages/super-secret-page/super-secret-page";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={SignInAndSignUp} />
          <Route exact path="/secret" component={Secret} />
        </Switch>
      </div>
    );
  }
}

export default App;
