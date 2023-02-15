import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";

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
        <h1>The Shawshank Redemption</h1>
      </header>
      <main className="App-main">
        <Movie
          img="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          name="The Shawshank Redemption"
          year={1994}
          rateImdb={9.2}
          genre="drama"
          storyLine="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
