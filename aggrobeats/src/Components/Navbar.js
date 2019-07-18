import React, { Component } from "react";
import { Header, Menu, Image } from "semantic-ui-react";
import logo from "../assets/logo.png";

export default class Navbar extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <Menu inverted widths={6} borderless stackable>
        <Menu.Item name="logo" onClick={() => this.goto("/home")}>
          <Image src={logo} size="mini" />
          <Header
            as="h3"
            textAlign="center"
            style={{
              marginTop: 0,
              marginBottom: 0,
              marginLeft: "10px",
              color: "#FFF"
            }}
          >
            Aggrobeats
          </Header>
        </Menu.Item>
        <Menu.Item name="dash" onClick={() => this.goto("/home")}>
          Dashboard
        </Menu.Item>
        <Menu.Item name="songs" onClick={() => this.goto("/home")}>
          View Songs
        </Menu.Item>
        <Menu.Item name="support" onClick={() => this.goto("/home")}>
          Support
        </Menu.Item>
        <Menu.Item name="support" onClick={() => this.goto("/Addsong")}>
          Add New Song
        </Menu.Item>
        <Menu.Item name="logout" onClick={() => this.goto("/")}>
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}
