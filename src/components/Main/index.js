import "./main.css";
import Card from "../Card";


const Main = () => {


  return (
    <main className={"main"}>
      <section className={"main__cartas"}>
        {Array(20)
          .fill("")
          .map((e, i) => (
            <Card key={i} />
          ))}
      </section>
    </main>
  );
};

export default Main;
