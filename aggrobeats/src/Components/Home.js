import React, { Component } from "react";
import { Header, Button, Grid, Statistic, Icon } from "semantic-ui-react";
import Navbar from "./Navbar";
import back from "../assets/backAbB.png";

export default class Home extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${back})`
        }}
      >
        <Navbar history={this.props.history} />
        <div class="ui centered middle aligned one column grid">
          <div class="row">
            <Header
              as="h1"
              inverted
              style={{ marginTop: 100, marginBottom: 0 }}
            >
              Welcome to your Dashboard
            </Header>
          </div>
          <Grid.Row style={{ marginTop: 50, marginBottom: 50 }} columns={3}>
            <div class="ui statistics inverted">
              <Statistic
                inverted
                size="huge"
                style={{ marginLeft: 50, marginRight: 50 }}
              >
                <div class="value">2</div>
                <div class="label">Singles</div>
              </Statistic>
              <Statistic
                inverted
                size="huge"
                style={{ marginLeft: 50, marginRight: 50 }}
              >
                <div class="value">1</div>
                <div class="label">Albums</div>
              </Statistic>
              <Statistic
                inverted
                size="huge"
                style={{ marginLeft: 50, marginRight: 50 }}
              >
                <div class="value">8</div>
                <div class="label">Total Tracks</div>
              </Statistic>
            </div>
          </Grid.Row>
          <div class="row">
            <div class="ui statistics inverted">
              <Statistic inverted size="huge">
                <div class="value">302</div>
                <div class="label">Listeners</div>
              </Statistic>
              <Statistic inverted size="huge">
                <div class="value">$23.03</div>
                <div class="label">Earnings</div>
              </Statistic>
            </div>
          </div>
          <Button
            style={{ marginTop: 80, marginBottom: 50 }}
            onClick={() => this.props.history.push("/addsong")}
            color="orange"
            inverted
            animated="fade"
          >
            <Button.Content visible>Add New Song</Button.Content>
            <Button.Content hidden>
              <Icon name="plus" />
            </Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}
