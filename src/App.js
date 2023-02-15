import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import MoviePage from "./components/MoviePage";
// import MoviePag from "./components/Movie";

import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
          {/* "The Shawshank Redemption" */}
        </a>
        {/* <Link to="./MoviePage.js"> Movie Page</Link> */}
      </header>

      {/* <main className="Main-section">
        <Movie
          img="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          name="The Shawshank Redemption"
          year={1994}
          rateImdb={9.2}
          genre="drama"
          storyLine="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        />
      </main> */}
    </div>
  );
}

export default App;
