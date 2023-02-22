import logo from "./logo.svg";
import "./App.css";

import ShowFilmsList from "./components/FilmsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ShowFilmsList></ShowFilmsList>
      </header>
    </div>
  );
}

export default App;
