import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import LandingPage from "./pages/landing-page";
import "./App.scss";

function App() {
 return (
  <div className="App">
   <Switch>
    <Route exact path="/" component={LandingPage} />
   </Switch>
  </div>
 );
}

export default App;
