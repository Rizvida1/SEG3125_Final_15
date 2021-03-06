import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  Header,
  Button,
  Modal,
  Form,
  Checkbox,
  Image,
  Icon
} from "semantic-ui-react";
import logo from "../assets/logo.png";
import back from "../assets/backAb.png";

export default class Login extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${back})`
        }}
      >
        <Modal dimmer="blurring" open onClose={this.close} basic size="tiny">
          <Modal.Content>
            <Image src={logo} size="small" centered />
            <Header
              as="h2"
              textAlign="center"
              style={{ marginTop: 0, marginBottom: 0 }}
              color="teal"
            >
              Welcome to
            </Header>
            <Header
              as="h1"
              textAlign="center"
              style={{ marginTop: 0, marginBottom: 28 }}
              color="orange"
            >
              Aggrobeats
            </Header>
            <Form inverted onSubmit={() => this.props.history.push("/home")}>
              <Form.Field>
                <label>Username</label>
                <input placeholder="Username" required color="black" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder="Password" type="password" required />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Keep me signed in" />
              </Form.Field>
              <Button
                type="submit"
                color="orange"
                style={{ width: "100%" }}
                inverted
                animated
              >
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Form>
            <Header
              textAlign="center"
              as="h4"
              color="blue"
              style={{ marginTop: 15, marginBottom: 150, cursor: "pointer" }}
            >
              <u>New user? Register here</u>
            </Header>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
