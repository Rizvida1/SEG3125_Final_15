import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import back from "../assets/backAb.png";
import Navbar from "./Navbar";

export default class Confirmation extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${back})`
        }}
      >
        <Navbar />

        <Header
          as="h1"
          content="Song Distributed!"
          subheader="The song will be available in 2 to 4 days."
        />
        <Link to="/home">
          <Button color="orange" inverted>
            Go Home
          </Button>
        </Link>
        <Link to="/">
          <Button color="teal" inverted>
            View Details
          </Button>
        </Link>
      </div>
    );
  }
}
