import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
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
            <Header as="h1" inverted>
              Admisson Info
            </Header>
          </div>
          <div class="row">
            <div class="ui statistics inverted">
              <div class="ui statistic inverted">
                <div class="value">2</div>
                <div class="label">Singles</div>
              </div>
              <div class="ui statistic inverted">
                <div class="value">1</div>
                <div class="label">Albums</div>
              </div>
              <div class="ui statistic inverted">
                <div class="value">8</div>
                <div class="label">Total Tracks</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="ui statistics inverted">
              <div class="ui statistic inverted">
                <div class="value">302</div>
                <div class="label">Listeners</div>
              </div>
              <div class="ui statistic inverted">
                <div class="value">$23.03</div>
                <div class="label">Earnings</div>
              </div>
            </div>
          </div>
          <Link to="/addsong">
            <Button>Click Here</Button>
          </Link>
        </div>
      </div>
    );
  }
}
