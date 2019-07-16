import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default class AddSong extends Component {
  render() {
    return (
      <div>
        <Header as="h1">Admisson Info</Header>
        <Link to="/confirmation">
          <Button>Add New Song</Button>
        </Link>
      </div>
    );
  }
}