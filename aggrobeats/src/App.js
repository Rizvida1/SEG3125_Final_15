import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Confirmation from "./Components/Confirmation";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/confirmation" component={Confirmation} />
        </div>
      </Router>
    );
  }
}

export default App;
