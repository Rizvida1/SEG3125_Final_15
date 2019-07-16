import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Confirmation from "./Components/Confirmation";
import AddSong from "./Components/AddSong";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/addsong" component={AddSong} />
        </div>
      </Router>
    );
  }
}

export default App;
