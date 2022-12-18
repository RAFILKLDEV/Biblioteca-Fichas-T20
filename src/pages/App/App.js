import Header from "../../components/Header/Header";
import Main from "../../components/Main";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header user={props.user} />
      <Main user={props.user} />
    </div>
  );
}

export default App;
