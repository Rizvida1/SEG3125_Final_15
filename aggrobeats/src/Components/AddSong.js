import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Progress, Header } from "semantic-ui-react";
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
          <Header
            as="h1"
            inverted
            style={{ background: "#0004", marginTop: 50, marginBottom: 50 }}
          >
            Add New Song
          </Header>
        </Grid>
        <Grid columns={2} verticalAlign="middle" centered>
          <Grid.Column>
            <Form inverted>
              <Form.Group inline>
                <Form.Input
                  placeholder="Enter file name here"
                  label="Music File"
                  onChange={() => this.setState({ progress: 0 })}
                />
                <Button onClick={() => this.setState({ progress: 100 })}>
                  Upload
                </Button>
              </Form.Group>
              <Progress percent={this.state.progress} autoSuccess progress />
              <Form.Group inline>
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

              <Form.Checkbox label="I agree to the Terms and Conditions" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>

        <div>
          <Link to="/confirmation">
            <Button>Add New Song</Button>
          </Link>
        </div>
      </div>
    );
  }
}
