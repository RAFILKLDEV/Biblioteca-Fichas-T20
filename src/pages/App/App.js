import "./App.css";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

function App(props) {
  return (
    <div className="App">
      <Header user={props.user} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
