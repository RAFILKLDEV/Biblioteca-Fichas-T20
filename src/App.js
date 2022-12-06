import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
