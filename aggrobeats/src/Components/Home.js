import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header as="h1">Home</Header>
        <Link to="/Confirmation">
          <Button>Click Here</Button>
        </Link>
      </div>
    );
  }
}
