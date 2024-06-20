import { useState } from "react";
import GameApp from "../GameApp";
import "./index.css";

const getUserName = () => {
  return localStorage.getItem("username");
};

// getting user name from local storage by getUserName() function.
const user = getUserName();

function WelcomePage(props) {
  // gameCards data from App component.
  const { gameCards } = props;
  // userName is used to store the user name in the localStorage.
  const [userName, setUserName] = useState(user === null ? "" : user);
  // userInput keep track of user input in input text element.
  const [userInput, setUserInput] = useState("");
  // showError will display an error if user try to start game without their name.
  const [showError, setShowError] = useState(false);

  // displayWelcomePage is displayed to the user if not started the game.
  const displayWelcomePage = userName === "";

  // changeInput event handler will change the user input if any data is entered.
  const changeInput = (event) => {
    setShowError(false);
    setUserInput(event.target.value);
  };

  // startTheGame will check the input element is empty or not, if value provided it will start the game.
  const startTheGame = () => {
    if (userInput.trim() !== "") {
      localStorage.setItem("username", userInput);
      setUserName(userInput);
    } else {
      // if value is empty it will show the error message to the user.
      setShowError(true);
    }
  };

  // same function like "startTheGame" but triggered when "Enter" key pressed.
  const enterPressed = (event) => {
    if (event.key === "Enter") {
      if (userInput.trim() !== "") {
        localStorage.setItem("username", userInput);
        setUserName(userInput);
      } else {
        setShowError(true);
      }
    }
  };

  // quitGame will clear the user name in the localStorage and reset input values.
  const quitGame = () => {
    localStorage.removeItem("username");
    setUserName("");
    setUserInput("");
  };

  return (
    <div className="main-container">
      {displayWelcomePage && (
        <div className="welcome-page-container">
          <h1 className="game-heading">Welcome to Mahjong Game</h1>
          <div className="game-login-container">
            <div className="user-container">
              <label className="label-content">Enter Your Name</label>
              <input
                onChange={changeInput}
                value={userInput}
                type="text"
                placeholder="Enter your name"
                className="user-input"
                onKeyDown={enterPressed}
              />
              {showError && (
                <p className="error-msg">*Enter your name to start the game</p>
              )}
            </div>

            <button onClick={startTheGame} className="play-button">
              Start Game
            </button>
          </div>
          <div className="instruction-container">
            <h1>INSTRUCTION:</h1>
            <ul className="instruction-list">
              <li>Click on any tile to turn it over and see what's there.</li>
              <li>Reveal matching tiles on the board in a timely manner.</li>
              <li>If two tiles matches, score award with one(1) point.</li>
              <li>
                If two tiles don't matches, score will be deducted with one(1)
                point.
              </li>
              <li>
                Current score & timer are displayed in the top of the board.
              </li>
            </ul>
          </div>
        </div>
      )}
      {!displayWelcomePage && ( //if user entered their name it will display GameApp page using conditional rendering.
        <GameApp gameCards={gameCards} quitGame={quitGame} />
      )}
    </div>
  );
}

export default WelcomePage;
