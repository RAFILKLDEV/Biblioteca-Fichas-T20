import "./styles.css";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Header-Title">
        Biblioteca T20{" "}
        <img
          src="https://styles.redditmedia.com/t5_18ls5s/styles/communityIcon_mlfvhpke64a51.png?width=256&s=8a96b9eab3ee16a30e33774808a685a79c273180"
          alt=""
          width={30}
          height={30}
        />
      </div>
      <div className="Header-Title">{props.user.email}</div>
    </div>
  );
};

export default Header;
