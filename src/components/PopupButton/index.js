import Popup from "reactjs-popup";
import { FaCheckSquare } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { CgDanger } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import "reactjs-popup/dist/index.css";

import "./index.css";

const PopupButton = (props) => {
  const { closeGame, playAgain } = props;

  const exitGame = () => {
    closeGame();
  };

  const restart = (closePopup) => {
    playAgain();
    closePopup();
  };
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<button className="game-button">Play Again</button>}
      >
        {(close) => (
          <>
            <h1 className="pop-heading">
              <VscDebugRestart /> RESTART
            </h1>
            <div className="confirmation-container">
              <p className="confirmation-msg">
                Are you sure you want to restart?
              </p>
              <div className="confirmation-button-container">
                <button
                  className="confirmation-button md"
                  onClick={() => restart(close)}
                >
                  <FaCheckSquare size={25} />
                </button>
                <button
                  className="confirmation-button lg"
                  onClick={() => restart(close)}
                >
                  Yes
                </button>
                <button
                  className="confirmation-button quit-game md"
                  onClick={() => close()}
                >
                  <IoMdCloseCircle size={25} />
                </button>
                <button
                  className="confirmation-button quit-game lg"
                  onClick={() => close()}
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}
      </Popup>
      <Popup
        modal
        trigger={<button className="game-button quit-game">Quit Game</button>}
      >
        {(close) => (
          <>
            <h1 className="pop-heading quit-heading">
              <CgDanger /> Quit!
            </h1>
            <div className="confirmation-container">
              <p className="confirmation-msg">Are you sure you want to quit?</p>
              <div className="confirmation-button-container">
                <button className="confirmation-button md" onClick={exitGame}>
                  <FaCheckSquare size={25} />
                </button>
                <button className="confirmation-button lg" onClick={exitGame}>
                  Yes
                </button>
                <button
                  className="confirmation-button quit-game md"
                  onClick={() => close()}
                >
                  <IoMdCloseCircle size={25} />
                </button>
                <button
                  className="confirmation-button quit-game lg"
                  onClick={() => close()}
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};
export default PopupButton;
