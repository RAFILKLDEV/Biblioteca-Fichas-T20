import Card from "../Card";
import "./main.css";

const Main = () => {
  return (
    <main className={"main"}>
      <section className={"main__cartas"}>
        {Array(8)
          .fill("")
          .map((e, i) => (
            <Card key={i} />
          ))}
      </section>
    </main>
  );
};

export default Main;
