import { useState, useEffect } from "react";
import { IoGameController } from "react-icons/io5";
import { FcAlarmClock } from "react-icons/fc";
import StatusBar from "../StatusBar";
import BoardCards from "../BoardCards";
import PopupButton from "../PopupButton";
import "./index.css";

// shuffleCard function is used to shuffle the card when starting and restarting the game.
// Fisher-Yates shuffle algorithm is implemented as a shuffling algorithm.
const shuffleCard = (arr) => {
  // currentIndex will be length of the array at starting.
  let currentIndex = arr.length;

  // while loop will run until the currentIndex not equal to 0.
  while (currentIndex !== 0) {
    // randomNumber will generate a random number using currentIndex and Math.random then decimal to integer using floor opertion.
    const randomNumber = Math.floor(Math.random() * currentIndex);

    // decement of currentIndex.
    currentIndex--;

    // shuffling array elements.
    [arr[currentIndex], arr[randomNumber]] = [
      arr[randomNumber],
      arr[currentIndex],
    ];
  }

  // returning the new shuffled array.
  return arr;
};

function GameApp(props) {
  const { gameCards, quitGame } = props;
  // getting user name from localStorage with key name "username".
  const userName = localStorage.getItem("username");
  // openedCard array will save the card details that opened after matching.
  const [openedCard, setOpenedCard] = useState([]);
  // matchCard array will check the initial two clicking cards are equal or not.
  const [matchCard, setMatchCard] = useState([]);
  // score will store the user score for the result evaluation.
  const [score, setScore] = useState(0);
  // mahjongCard will have the initial card arrangements to play.
  const [mahjongCard, setMahjongCard] = useState(shuffleCard([...gameCards]));
  // timeInSec is used to calculate the time in seconds.
  const [timeInSec, setTimeInSec] = useState(0);
  // timeInMin is used to calculate the time in minutes.
  const [timeInMin, setTimeInMin] = useState(0);
  // disableBoard is used to disable the board for 1 sec to match two cards opened.
  const [disableBoard, setDisableBoard] = useState(false);

  // playSound handling multiple sound path to produce different sound for corresponding user action.
  const playSound = (soundPath) => {
    const sound = new Audio(soundPath);
    sound.play();
  };

  // this useEffect hook will produce game start sound once game started.
  useEffect(() => {
    playSound("/Audio_Tracks/game-start-sound.mp3");
  }, []);

  // openedCard will be triggered when clicking each closed cards.
  const openGameCard = (id) => {
    // if disableBoard is true, no action is performed on the board.
    if (disableBoard) return;

    // findClickedCard will contains object with details of clicked card.
    const findClickedCard = mahjongCard.find((card) => card.id === id);

    // updateGameCard will open the card that user clicked.
    const updateGameCard = mahjongCard.map((card) =>
      card.id === id ? { ...card, isOpened: true } : card
    );
    setMahjongCard(updateGameCard);

    // if matchCard array is empty, then user opened the first card and stores in matchCard array.
    if (matchCard.length === 0) {
      setMatchCard(findClickedCard);
    } else {
      // else user opened the second card, so board disabled for 1sec to find the card matching.
      setDisableBoard(true);
      // if both card imgName matches, then user finds the right cards to match.
      if (findClickedCard.imgName === matchCard.imgName) {
        // find the both card from main mahjongCard board array and store it in cardFound variable.
        const cardFound = mahjongCard.filter(
          (card) => card.imgName === matchCard.imgName
        );
        // playSound function will be executed with matching sound path as a parameter.
        playSound("./Audio_Tracks/match_sound.mp3");
        // cards found are added to the openedCard array using spread operator and prevState.
        setOpenedCard((prevState) => [...prevState, ...cardFound]);
        // score updates with 1 point if user matches both cards.
        setScore((prevState) => prevState + 1);
        // setting matchCard to initial state to check other cards.
        setMatchCard([]);
        // activating the board from disable state to normal using boolean values.
        setDisableBoard(false);
      } else {
        // if user don't match the right card then unmatch_sound will be played.
        playSound("./Audio_Tracks/unmatch_sound.mp3");
        // set timeout function will execute after 1 sec to maintain the board disable state.
        setTimeout(() => {
          // resetGameCard will reset opened card state to close both the card.
          const resetGameCard = mahjongCard.map((card) =>
            card.id === id || card.id === matchCard.id
              ? { ...card, isOpened: false }
              : card
          );

          // for choosing wrong card the user score is deducted by 1 point.
          setScore((prevState) => prevState - 1);
          // the reset card details are stored in the main mahjongCard board array.
          setMahjongCard(resetGameCard);
          // here also the matchCard turned into empty after checking both the cards.
          setMatchCard([]);
          // disableBoard state is changed to initial state after 1000 milliseconds delay.
          setDisableBoard(false);
        }, 1000); // milliseconds value to specify how much time need for delay to setTimeout function.
      }
    }
  };

  // game will be finished after opening all card depending on the gameFinished value.
  const gameFinished = openedCard.length === 2;

  if (gameFinished) {
    // if user completes the game game-over-sound will be played.
    playSound("./Audio_Tracks/game-over-sound.mp3");
  }

  console.log(mahjongCard);

  // resetGame function will be excuted will user tries to restart the game
  const resetGame = () => {
    // each and every state variable are reserted to their initial values.
    setOpenedCard([]);
    setMatchCard([]);
    setMahjongCard(shuffleCard([...gameCards]));
    setScore(0);
    setTimeInMin(0);
    setTimeInSec(0);
    setDisableBoard(false);
    // game-start-sound will be played once the game restarted.
    playSound("/Audio_Tracks/game-start-sound.mp3");
  };

  // deleteUser function will be triggered once the user quit the game.
  const deleteUser = () => {
    quitGame();
    // game-quit-sound will be played once the game exited by user.
    playSound("/Audio_Tracks/game-quit-sound.mp3");
  };

  // this effect is used to update the timer value for each second.
  useEffect(() => {
    let timerId;
    if (!gameFinished) {
      timerId = setInterval(() => {
        setTimeInSec((prevState) => prevState + 1);
      }, 1000);
    }

    // clean up function used to stop the timer value when component unmounted.
    return () => {
      clearInterval(timerId);
    };
  }, [gameFinished]); // gameFinished is used in dependence array to keep track for this effect.

  // if condition check if timeInSec is greater than equal to 59 then updates the timeInMin by 1 and reset timeInSec to 0.
  if (timeInSec >= 59) {
    setTimeInMin((prevState) => prevState + 1);
    setTimeInSec(0);
  }

  // minsToDisplay and secToDisplay used to update timer value if less than 9 then value is concatenate with 0 or else value is displayed.
  const minsToDisplay = timeInMin > 9 ? timeInMin : `0${timeInMin}`;
  const secToDisplay = timeInSec > 9 ? timeInSec : `0${timeInSec}`;

  return (
    <div>
      {!gameFinished && (
        <div className="game-board-page">
          <h1 className="game-board-heading">Mahjong Game</h1>
          <div className="user-status">
            <div className="heading-status-container">
              <IoGameController className="status-icon" />
              <h1 className="status-heading">Score:</h1>

              <h1 className="user-score">{score}</h1>
            </div>
            <div className="heading-status-container">
              <FcAlarmClock className="status-icon" />
              <h1 className="status-heading">Timer:</h1>
              <span className="timer-value">
                {minsToDisplay}:{secToDisplay}
              </span>
            </div>
          </div>
          <div className="center-board-container">
            <div className="board-title">
              <p className="player-name">
                Player: {userName[0].toUpperCase() + userName.substring(1)}
              </p>
              <p className="welcome-text">Hi buddy👋🏻, fire on 🔥</p>
            </div>
            <ul className="card-image-list">
              {mahjongCard.map((card) => (
                <BoardCards
                  key={card.id}
                  eachCard={card}
                  openGameCard={openGameCard}
                />
              ))}
            </ul>
            <PopupButton closeGame={deleteUser} playAgain={resetGame} />
          </div>
        </div>
      )}
      {gameFinished && (
        <StatusBar
          score={score}
          min={minsToDisplay}
          sec={secToDisplay}
          resetGame={resetGame}
          deleteUser={deleteUser}
        />
      )}
    </div>
  );
}

export default GameApp;
