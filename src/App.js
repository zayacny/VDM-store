import logo from "./logo.svg";
import { useEffect, useState } from "react";
// import movieComponentImage from "./components/images/topgun.jpg";
import "./App.css";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

function App() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/movie-data")
      .then((response) => response.json())
      .then((data) => setMovieData(data.movieData));
  }, []);

  console.log(movieData);
  if (!movieData) {
    return null;
  }

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
        {/* // Also it works: movieData={movieData} + function Movie({ movieData }) */}
        {/* <Movie movieData={movieData} /> */}
        <Movie {...movieData} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
