import rock from "./../assets/Rock.svg";
import paper from "./../assets/Paper.svg";
import scissors from "./../assets/Scissors.svg";
import close from "../assets/close.svg";

import gamelogic from "../util/gamelogic";

function Modal({ setModal, bet, curbChoice, reset }) {
  let img;
  switch (bet) {
    case "rock":
      img = <img className="bet-image" src={rock} alt="bet" />;
      break;
    case "paper":
      img = <img className="bet-image" src={paper} alt="bet" />;
      break;
    case "scissors":
      img = <img className="bet-image" src={scissors} alt="bet" />;
      break;
    default:
      break;
  }
  let result, curbImg;
  if (curbChoice) {
    switch (curbChoice) {
      case "rock":
        curbImg = <img className="bet-curb-image" src={rock} alt="bet" />;
        break;
      case "paper":
        curbImg = <img className="bet-curb-image" src={paper} alt="bet" />;
        break;
      case "scissors":
        curbImg = <img className="bet-curb-image" src={scissors} alt="bet" />;
        break;
      default:
        break;
    }
    result = gamelogic(bet, curbChoice);
  }

  const closeModal = () => {
    setModal(false);
    reset();
  };
  return (
    <div className="modal-container" onClick={closeModal}>
      <div className={`modal${curbChoice && " modal-result"}`}>
        <img
          onClick={closeModal}
          className="modal-close"
          src={close}
          alt="close-modal"
        />
        {!curbChoice && (
          <>
            <h2 className="modal-title">WAITING CURB’S CHOOSE</h2>
            <div className="bet-container">
              <div className="bet-group">
                {img}
                <span className="bet-text">Your bet</span>
              </div>
              <div className="bet-group">
                <div className="bet-loading">
                  <div className="dot-pulse"></div>
                </div>
                <img
                  className="bet-curb"
                  src="assets/curb_logo.png"
                  alt="curb-logo"
                />
              </div>
            </div>
          </>
        )}
        {curbChoice && (
          <>
            <h2 className="modal-title">{result.main}</h2>
            <p className="modal-sub">{result.sub}</p>
            <div className="bet-group">{curbImg}</div>
            <div className="modal-button-container">
              <button onClick={closeModal} className="modal-ok-button">Ok</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
