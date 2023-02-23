import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

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
      </header>

      <main className="App-main">
        <Movie />
      </main>

      <Footer />
    </div>
  );
}

export default App;
