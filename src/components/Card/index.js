import "./card.css";

const Card = (props) => {
  return (
    <div className={"main__card"}>
      <p className={"card__name"}>{props.name}</p>
      <img
        className={"card__image"}
        src={props.img}
        alt={"Ficha de " + props.name}
      ></img>
    </div>
  );
};

export default Card;
