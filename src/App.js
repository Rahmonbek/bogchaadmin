import React, { Component } from "react";
import CabinetEducator from "./pages/cabinetEducator";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Verify from "./pages/Verify";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Verify />
            </Route>

            <Route path="/educator">
              <CabinetEducator />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
