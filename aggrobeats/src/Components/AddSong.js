import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Progress } from "semantic-ui-react";
import Navbar from "./Navbar";
import back from "../assets/backAbB.png";

export default class AddSong extends Component {
  state = { progress: 0 };

  handleChange = (e, { value }) => this.setState({ value });

  handleUpload = () => {
    this.setState({ progress: 100 });
    // while (this.state.progress < 100) {
    //   setTimeout(this.increment(), 10);
    // }
  };

  //   increment = () => {
  //     this.setState({ progress: this.state.progress + 10 });
  //     console.log(this.state.progress);
  //   };

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

        <Grid columns={2} verticalAlign="middle" centered>
          <Grid.Column>
            <Form inverted>
              <Form.Group inline>
                <Form.Input
                  placeholder="Enter file name here"
                  label="Music File"
                />{" "}
                <Button onClick={() => this.handleUpload()}>Upload</Button>
              </Form.Group>
              <Progress percent={this.state.progress} indicating />
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
