import { useState } from "react";
import "./App.css";

const getUserName = () => {
  return localStorage.getItem("username");
};
const user = getUserName();
function App() {
  const [userName, setUserName] = useState(user === null ? "" : user);
  const [userInput, setUserInput] = useState("");
  const [showError, setShowError] = useState(false);
  const displayWelcomePage = userName === "";

  console.log(displayWelcomePage);

  const changeInput = (event) => {
    setShowError(false);
    setUserInput(event.target.value);
  };

  console.log(userName);
  const startTheGame = () => {
    if (userInput !== "") {
      localStorage.setItem("username", userInput);
      setUserName(userInput);
    } else {
      setShowError(true);
    }
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
              />
            </div>

            {showError && <p className="error-msg">*Enter your name to star</p>}
            <button onClick={startTheGame} className="play-button">
              Play
            </button>
          </div>
        </div>
      )}
      {!displayWelcomePage && (
        <div className="game-board-page">
          <h1 className="game-board-heading">Mahjong Game</h1>
          <div>
            <p>Score: 10</p>
            <p>Time: 10:00</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
