import { useEffect } from "react";
import "./index.css";

function BoardCards(props) {
  const { eachCard, openGameCard } = props;
  const { id, imgName, imgUrl, isOpened } = eachCard;

  const openCard = () => {
    if (!isOpened) {
      openGameCard(id);
    }
  };

  useEffect(() => {
    if (isOpened) {
      const flipSound = new Audio("./Audio_Tracks/flipcard-sound.mp3");
      flipSound.play();
    }
  }, [isOpened]);

  const flipName = isOpened ? "flip" : "";

  return (
    <li className={`card-item ${flipName}`} onClick={openCard}>
      {isOpened && <img src={imgUrl} alt={imgName} className="card-image" />}
    </li>
  );
}

export default BoardCards;
