import "./card.css";

const Card = (props) => {
  return (
    <div className={"main__card"}>
      <div className={"card__image"}>{props.name}</div>
      <p className={"card__name"}></p>
    </div>
  );
};

export default Card;
