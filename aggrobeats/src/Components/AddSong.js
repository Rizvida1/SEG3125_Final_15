import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Button, Statistic } from "semantic-ui-react";

export default class AddSong extends Component {
  render() {
    return (
      <div class="ui centered middle aligned one column grid">
        <div class="row">
            <Header as="h1">Admisson Info</Header>
        </div>
        <div class="row">
            <div class="ui statistics">
                <div class="ui statistic">
                    <div class="value">2</div>
                    <div class="label">Singles</div>
                </div>
                <div class="ui statistic">
                    <div class="value">1</div>
                    <div class="label">Albums</div>
                </div>
                <div class="ui statistic">
                    <div class="value">8</div>
                    <div class="label">Total Tracks</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="ui statistics">
                <div class="ui statistic">
                    <div class="value">302</div>
                    <div class="label">Listeners</div>
                </div>
                <div class="ui statistic">
                    <div class="value">$23.03</div>
                    <div class="label">Earnings</div>
                </div>
            </div>
        </div>
        <div class="row">
            <Link to="/confirmation">
                    <Button>Add New Song</Button>
            </Link>
        </div>
      </div>
    );
  }
}