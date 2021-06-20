import rock from "./../assets/Rock.svg";
import paper from "./../assets/Paper.svg";
import scissors from "./../assets/Scissors.svg";
import close from "../assets/close.svg";

function Modal({ setModal, bet, loading }) {
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

  const closeModal = () => setModal(false);
  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal">
        <img
          onClick={closeModal}
          className="modal-close"
          src={close}
          alt="close-modal"
        />
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
      </div>
    </div>
  );
}

export default Modal;
