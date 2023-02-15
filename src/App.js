import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import About from "./components/About";

function App() {
  return (
    <Router>
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
          <div>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/movie-list" className="nav-link">
              Movie List
            </Link>
            <Link to="/movie" className="nav-link">
              Movie
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <br></br>
          </div>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie-list" element={<MovieList />}></Route>
            <Route
              path="/movie"
              element={
                <Movie
                  img="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                  name="The Shawshank Redemption"
                  year={1994}
                  rateImdb={9.2}
                  genre="drama"
                  storyLine="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>

        <footer className="App-footer"></footer>
      </div>
    </Router>
  );
}

export default App;
