import "./card.css";

const Card = () => {
  return (
    <div className={"main__card"}>
      <div className={"card__image"}>Image</div>
      <p className={"card__name"}>NPC or monster's name</p>
    </div>
  );
};

export default Card;
