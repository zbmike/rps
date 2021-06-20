import rock from "./assets/Rock.svg";
import paper from "./assets/Paper.svg";
import scissors from "./assets/Scissors.svg";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="title">ROCK – PAPER – SCISSORS</h1>
      <p className="description">
        Rock Paper Scissors is a zero sum game that is usually played by two
        people using their hands and no tools. The idea is to make shapes with
        an outstretched hand where each shape will have a certain degree of
        power and will lead to an outcome.
      </p>
      <h4 className="select-text">SELECT YOUR BET</h4>
      <div className="button-group">
        <div type="button" className="button">
          <img className="button-image" src={rock} alt="rock" />
          <span className="button-text">Rock</span>
        </div>
        <div type="button" className="button">
          <img className="button-image" src={paper} alt="paper" />
          <span className="button-text">Paper</span>
        </div>
        <div type="button" className="button">
          <img className="button-image" src={scissors} alt="Scissors" />
          <span className="button-text">Scissors</span>
        </div>
      </div>
    </div>
  );
}

export default App;
