import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default class Confirmation extends Component {
  render() {
    return (
      <div>
        <Header 
            as="h1" 
            content="Song Distributed!"
            subheader='The song will be available in 2 to 4 days.'
        />
        <Link to="/home">
          <Button>Go Home</Button>
        </Link>
        <Link to="/">
          <Button>View Details</Button>
        </Link>
      </div>
    );
  }
}
