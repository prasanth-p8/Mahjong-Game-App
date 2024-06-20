import PopupButton from "../PopupButton";
import "./index.css";

function StatusBar(props) {
  // necessary data are destructed from the component sharing through props.
  const { score, min, sec, resetGame, deleteUser } = props;

  // getting user name from the local storage and displayed to user.
  const userName = localStorage.getItem("username");

  // quitGame triggered from PopupButton component and triggers exit function.
  const quitGame = () => {
    deleteUser();
  };

  // reset function triggered from PopupButton component and triggers restart function.
  const restart = () => {
    resetGame();
  };

  // user variable stores username with capitalizing the first letter and adding remaining letters with substring.
  let user = userName[0].toUpperCase() + userName.substring(1);

  // using ternary operator condition checked and respective value stored in resultHeading.
  const resultHeading =
    score > 0
      ? `Congratutions ${user}. You are a Champion!!!`
      : `Don't Worry Champ. Keep playing ${user}`;

  // styling applied with className adding to the element based on the user score.
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
