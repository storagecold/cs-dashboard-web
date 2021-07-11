import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import GetColdStorage from "../coldStorage/GetColdStorage";
import AddColdStorage from "../coldStorage/AddColdStorage";
import Dashboard from "../dashboard/Dashboard";
import {AmadTable} from "../amad/AmadTable";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
        <div>
          <Router>
            <div>
              <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                      return (
                          this.state.isUserAuthenticated ?
                              <Redirect to="/dashboard" /> :
                              <Redirect to="/getColdStorage" />
                      )
                    }}
                />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/getColdStorage" component={GetColdStorage} />
                <Route exact path="/addColdStorage" component={AddColdStorage} />
                <Route exact path="/amadTable" component={AmadTable} />
              </Switch>
              <hr />
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/addColdStorage">AddColdStorage</Link>
                </li>
                <li>
                  <Link to="/getColdStorage">GetColdStorage</Link>
                </li>
                <li>
                  <Link to="/amadTable">AmadTable</Link>
                </li>
              </ul>
            </div>
          </Router>
        </div>
    );
  }
}