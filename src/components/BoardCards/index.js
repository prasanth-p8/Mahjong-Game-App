import { useEffect } from "react";
import "./index.css";

function BoardCards(props) {
  const { eachCard, openGameCard } = props;

  // values are destructed from the eachCard object from GameApp Component.
  const { id, imgName, imgUrl, isOpened } = eachCard;

  // openCard will transfer the card id to GameApp to follow logic function of card.
  const openCard = () => {
    if (!isOpened) {
      openGameCard(id);
    }
  };

  // this effect is used to play shuffle sound when each card is opened.
  useEffect(() => {
    if (isOpened) {
      const flipSound = new Audio("./Audio_Tracks/flipcard-sound.mp3");
      flipSound.play();
    }
  }, [isOpened]); // isOpened value is used in dependence array to play sound on closed card when opened.

  // flipName is a className value used to add flip effect on the cards.
  const flipName = isOpened ? "flip" : "";

  return (
    <li className={`card-item ${flipName}`} onClick={openCard}>
      {isOpened && <img src={imgUrl} alt={imgName} className="card-image" />}
    </li>
  );
}

export default BoardCards;
