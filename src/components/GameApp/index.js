import { useState, useEffect } from "react";
import { IoGameController } from "react-icons/io5";
import { FcAlarmClock } from "react-icons/fc";
import StatusBar from "../StatusBar";
import BoardCards from "../BoardCards";
import "./index.css";

function GameApp(props) {
  const { gameCards, quitGame } = props;
  console.log(gameCards.reverse());

  const userName = localStorage.getItem("username");

  const [clickedCard, setClickedCard] = useState([]);
  const [clickedCardName, setClickedCardName] = useState([]);
  const [score, setScore] = useState(0);
  const [mahjongCard, setMahjongCard] = useState(gameCards);
  const [timeInSec, setTimeInSec] = useState(0);
  const [timeInMin, setTimeInMin] = useState(0);

  const openGameCard = (id) => {
    const findClickedCard = mahjongCard.find((card) => card.id === id);

    const cardAlreadyOpened = clickedCard.find((card) => card.id === id);

    if (cardAlreadyOpened === undefined) {
      if (clickedCardName.length === 0) {
        const updateGameCard = mahjongCard.map((card) => {
          if (card.id === id) {
            return { ...card, isOpened: true };
          }
          return card;
        });

        setMahjongCard(updateGameCard);
        setClickedCardName(findClickedCard);
      } else {
        const updateGameCard = mahjongCard.map((card) => {
          if (card.id === id) {
            return { ...card, isOpened: true };
          }
          return card;
        });

        setMahjongCard(updateGameCard);
        if (findClickedCard.id !== clickedCardName.id) {
          if (findClickedCard.imgName === clickedCardName.imgName) {
            const cardFound = mahjongCard.filter(
              (card) => card.imgName === clickedCardName.imgName
            );
            setClickedCard((prevState) => [...prevState, ...cardFound]);
            setScore((prevState) => prevState + 1);
            setClickedCardName([]);
          } else {
            const updateGameCard = mahjongCard.map((card) => {
              if (card.imgName === clickedCardName.imgName) {
                return { ...card, isOpened: false };
              } else if (card.id === id) {
                return { ...card, isOpened: false };
              }
              return card;
            });
            setScore((prevState) => prevState - 1);
            setMahjongCard(updateGameCard);
            setClickedCardName([]);
          }
        } else {
          const updateGameCard = mahjongCard.map((card) => {
            if (card.id === id) {
              return { ...card, isOpened: false };
            }
            return card;
          });
          setScore((prevState) => prevState - 1);
          setMahjongCard(updateGameCard);
          setClickedCardName([]);
        }
      }
    }
  };

  const gameFinished = clickedCard.length === 24;

  const resetGame = () => {
    setClickedCard([]);
    setMahjongCard(gameCards);
    setScore(0);
    setTimeInMin(0);
    setTimeInSec(0);
  };

  const deleteUser = () => {
    quitGame();
  };

  useEffect(() => {
    let timerId;
    if (!gameFinished) {
      timerId = setInterval(() => {
        setTimeInSec((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [gameFinished]);

  if (timeInSec >= 59) {
    setTimeInMin((prevState) => prevState + 1);
    setTimeInSec(0);
  }

  const minsToDisplay = timeInMin > 9 ? timeInMin : `0${timeInMin}`;
  const secToDisplay = timeInSec > 9 ? timeInSec : `0${timeInSec}`;

  console.log(minsToDisplay, secToDisplay);
  return (
    <div>
      {!gameFinished && (
        <div className="game-board-page">
          <h1 className="game-board-heading">Mahjong Game</h1>
          <div className="user-status">
            <div className="heading-status-container">
              <h1 className="status-heading">Score:</h1>
              <IoGameController size={50} className="status-icon" />
              <h1 className="user-score">{score}</h1>
            </div>
            <div className="heading-status-container">
              <h1 className="status-heading">Timer:</h1>
              <FcAlarmClock size={50} className="status-icon" />
              <span className="timer-value">
                {minsToDisplay}:{secToDisplay}
              </span>
            </div>
          </div>
          <div className="center-board-container">
            <div className="board-title">
              <p>Player: {userName}</p>
              <p>Hi buddy, fire on !!!</p>
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
            <div className="game-button-container">
              <button className="game-button" onClick={resetGame}>
                Restart
              </button>
              <button className="game-button quit-game" onClick={deleteUser}>
                Quit
              </button>
            </div>
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
