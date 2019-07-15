import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header as="h1">Login</Header>
        <Link to="/home">
          <Button>Click Here</Button>
        </Link>
      </div>
    );
  }
}
