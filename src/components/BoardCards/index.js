import "./index.css";

function BoardCards(props) {
  const { eachCard, openGameCard } = props;
  const { id, imgName, imgUrl, isOpened } = eachCard;

  const openCard = () => {
    openGameCard(id);
  };

  return (
    <li className="card-item" onClick={openCard}>
      {isOpened && <img src={imgUrl} alt={imgName} className="card-image" />}
    </li>
  );
}

export default BoardCards;
