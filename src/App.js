import rock from "./assets/Rock.svg";
import paper from "./assets/Paper.svg";
import scissors from "./assets/Scissors.svg";
import { useState } from "react";

import Modal from './components/modal';

function App() {
  const [modal, setModal] = useState(false);
  const [bet, setBet] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = (choice) => () => {
    setBet(choice);
    setModal(true);

    // Todo
  }

  return (
    <div className="App">
      {modal && (<Modal setModal={setModal} bet={bet} loading={loading}/>)}
      <h1 className="title">ROCK – PAPER – SCISSORS</h1>
      <p className="description">
        Rock Paper Scissors is a zero sum game that is usually played by two
        people using their hands and no tools. The idea is to make shapes with
        an outstretched hand where each shape will have a certain degree of
        power and will lead to an outcome.
      </p>
      <h4 className="select-text">SELECT YOUR BET</h4>
      <div className="button-group">
        <div className="button" onClick={handleClick("rock")}>
          <img className="button-image" src={rock} alt="rock" />
          <span className="button-text">Rock</span>
        </div>
        <div className="button" onClick={handleClick("paper")}>
          <img className="button-image" src={paper} alt="paper" />
          <span className="button-text">Paper</span>
        </div>
        <div className="button" onClick={handleClick("scissors")}>
          <img className="button-image" src={scissors} alt="scissors" />
          <span className="button-text">Scissors</span>
        </div>
      </div>
    </div>
  );
}

export default App;
