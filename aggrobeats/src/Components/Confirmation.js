import React, { Component } from "react";
import { Header, Button, Grid, ButtonGroup, Card } from "semantic-ui-react";
import Navbar from "./Navbar";
import back from "../assets/backAbB.png";

export default class Confirmation extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${back})`
        }}
      >
        <Navbar history={this.props.history} />

        <Grid centered middle aligned one column grid>
          <Card fluid style={{ background: "#0004", marginTop: 250 }}>
            <Grid centered columns={1}>
              <Grid.Column>
                <Header
                  as="h1"
                  content="Song Distributed!"
                  subheader="The song will be available in 2 to 4 days."
                  textAlign="center"
                  inverted
                  style={{ marginTop: 28, marginBottom: 0 }}
                />
              </Grid.Column>
              <Grid.Row centered columns={2}>
                <ButtonGroup style={{ marginTop: 0, marginBottom: 28 }}>
                  <Button
                    color="orange"
                    inverted
                    onClick={() => this.goto("/home")}
                  >
                    Go Home
                  </Button>
                  <Button
                    color="teal"
                    inverted
                    onClick={() => this.goto("/home")}
                  >
                    View Details
                  </Button>
                </ButtonGroup>
              </Grid.Row>
            </Grid>
          </Card>
        </Grid>
      </div>
    );
  }
}
