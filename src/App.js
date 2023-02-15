import logo from "./logo.svg";
import "./App.css";
// import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <br></br>
      </header>
    </div>
  );
}

export default App;
