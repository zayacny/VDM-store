import logo from "./logo.svg";
import "./App.css";
import FilmsList from "./components/FilmsList.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Хлопці! Вітаю вас на першому проекті!
        </a>
        <FilmsList></FilmsList>g
      </header>
    </div>
  );
}

export default App;
