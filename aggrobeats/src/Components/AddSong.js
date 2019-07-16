import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Progress,
  Header,
  Icon,
  Divider,
  Card,
  Checkbox
} from "semantic-ui-react";
import Navbar from "./Navbar";
import back from "../assets/backAbB.png";

export default class AddSong extends Component {
  state = { progress: 0 };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${back})`
        }}
      >
        <Navbar history={this.props.history} />
        <Grid centered>
          <Header as="h1" inverted style={{ marginTop: 68, marginBottom: 50 }}>
            Add New Song
          </Header>
        </Grid>
        <Grid verticalAlign="middle" centered>
          <Grid.Row>
            <Form inverted>
              <Form.Group inline>
                <Form.Input
                  placeholder="Enter file name here"
                  label="Music File"
                  onChange={() => this.setState({ progress: 0 })}
                />
                <Button
                  onClick={() => this.setState({ progress: 100 })}
                  color="teal"
                  inverted
                  animated="vertical"
                >
                  <Button.Content visible>Upload</Button.Content>
                  <Button.Content hidden>
                    <Icon name="up arrow" />
                  </Button.Content>
                </Button>
              </Form.Group>
              <Progress
                percent={this.state.progress}
                autoSuccess
                progress
                style={{ background: "#0004", marginTop: 20, marginBottom: 0 }}
                size="medium"
              />
              <Divider />
              <Form.Group>
                <Form.Input
                  placeholder="Song Name"
                  label="Song Name:"
                  width="16"
                />
              </Form.Group>
              <Form.Group style={{ marginTop: 0, marginBottom: 30 }}>
                <Form.Input placeholder="Artists" label="Artists" width="16" />
                <Icon name="question circle" inverted />
              </Form.Group>
              <Form.Group widths={4} style={{ marginTop: 20, marginBottom: 0 }}>
                <label>Upload Quality:</label>
                <Form.Radio
                  label="Auto"
                  value="sm"
                  checked={value === "sm"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="Low"
                  value="md"
                  checked={value === "md"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="High"
                  value="lg"
                  checked={value === "lg"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Card
                fluid
                style={{ background: "#0004", marginTop: 20, marginBottom: 10 }}
              >
                <Card.Header>
                  <Header
                    as="h3"
                    inverted
                    style={{ marginTop: 10, marginBottom: 10 }}
                  >
                    Select Platforms:
                  </Header>
                </Card.Header>
                <Checkbox
                  label="Spotify"
                  style={{ marginLeft: 50, marginBottom: 10 }}
                />
                <Checkbox
                  label="Apple Music"
                  style={{ marginLeft: 50, marginBottom: 10 }}
                />
                <Checkbox
                  label="Youtube Music"
                  style={{ marginLeft: 50, marginBottom: 10 }}
                />
                <Checkbox
                  label="Tidal"
                  style={{ marginLeft: 50, marginBottom: 10 }}
                />
                <Checkbox
                  label="Amazon Music"
                  style={{ marginLeft: 50, marginBottom: 10 }}
                />
                <Checkbox
                  label="Soundcloud"
                  style={{ marginLeft: 50, marginBottom: 10 }}
                />
              </Card>

              <Form.Checkbox
                label="I agree to the Terms and Conditions"
                style={{ marginTop: 20, marginBottom: 0 }}
              />
              <Button
                onClick={() => this.props.history.push("/confirmation")}
                color="orange"
                inverted
                animated="fade"
                fluid
                style={{ marginTop: 25, marginBottom: 10 }}
              >
                <Button.Content visible>Upload</Button.Content>
                <Button.Content hidden>
                  <Icon name="check" />
                </Button.Content>
              </Button>
            </Form>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
