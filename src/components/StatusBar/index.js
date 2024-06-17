import "./index.css";

function StatusBar(props) {
  const { score, min, sec, resetGame, deleteUser } = props;

  const userName = localStorage.getItem("username");

  const playAgain = () => {
    resetGame();
  };

  const exitGame = () => {
    deleteUser();
  };

  const resultImage =
    score > 0
      ? "https://res.cloudinary.com/dlefoxknm/image/upload/v1718643507/image_for_positive_score_dg3mhu.png"
      : "https://res.cloudinary.com/dlefoxknm/image/upload/v1718643507/image_for_negative_score_ieeu1y.png";

  const resultHeading =
    score > 0
      ? `Congratutions ${userName}. You are a Champion!!!`
      : `Don't Worry Champ. Keep playing ${userName}`;

  return (
    <div className="status-bar-container">
      <img
        src="https://res.cloudinary.com/dlefoxknm/image/upload/v1718642145/game_over_text_image_ib7egj.png"
        alt="game over text"
        className="game-over-text"
      />
      <div className="status-container">
        <div>
          <div className="result-image-container">
            <img
              src={resultImage}
              alt="result status"
              className="result-image"
            />
          </div>
          <h1 className="result-heading">{resultHeading}</h1>

          <h1>Score: {score}</h1>
          <h1 className="time-taken">
            Time Taken: {min}m :{sec}s
          </h1>
          <div className="game-button-container">
            <button className="game-button" onClick={playAgain}>
              Play Again
            </button>
            <button className="game-button quit-game" onClick={exitGame}>
              Quit Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatusBar;
