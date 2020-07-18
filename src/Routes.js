import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import MapPage from "./Map/MapPage";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/my-location/" component={Home} />
      <Route exact path="/my-location/map" component={MapPage} />
    </Switch>
  </Router>
);

export default Routes;
