import PopupButton from "../PopupButton";
import "./index.css";

function StatusBar(props) {
  const { score, min, sec, resetGame, deleteUser } = props;

  const userName = localStorage.getItem("username");

  const quitGame = () => {
    deleteUser();
  };

  const restart = () => {
    resetGame();
  };

  let user = userName[0].toUpperCase() + userName.substring(1);

  const resultHeading =
    score > 0
      ? `Congratutions ${user}. You are a Champion!!!`
      : `Don't Worry Champ. Keep playing ${user}`;

  const winningBg = score > 0 ? "winning-bg" : "";
  const scoreColor = score > 0 ? "winning-color" : "";

  return (
    <div className="status-bar-container">
      <img
        src="https://res.cloudinary.com/dlefoxknm/image/upload/v1718792641/game_over-text_epyxyc.png"
        alt="game over text"
        className="game-over-text"
      />
      <div className={`status-container ${winningBg}`}>
        <div className="status-content-container">
          <h1 className="result-heading">{resultHeading}</h1>
          <div className="each-status-container">
            <h1 className="status-title">Your Score:</h1>
            <h1 className={`player-score ${scoreColor}`}>{score}</h1>
          </div>
          <h1 className="time-taken">
            Time Taken: {min}m {sec}s
          </h1>
          <PopupButton closeGame={quitGame} playAgain={restart} />
        </div>
      </div>
    </div>
  );
}
export default StatusBar;
