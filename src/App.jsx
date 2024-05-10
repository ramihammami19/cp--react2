import "./App.css";

import { Component } from "react";
import PlayerList from "./PlayerList";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios
      .get("/palayer.json")
      .then((res) => {
        this.setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}
