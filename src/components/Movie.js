import React from "react";
import "./Movie.css";

// const MovieList = () => (
//   <div className="movie-list">
//     <Movie
//       img="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
//       name="The Shawshank Redemption"
//       year={1994}
//       rateImdb={9.2}
//       genre="drama"
//       storyLine="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
//     />
//   </div>
// );

const Movie = ({ img, name, year, rateImdb, genre, storyLine }) => (
  <div className="movie-container">
    <img src={img} alt={name} className="movie-image" />
    <div className="movie-info">
      <h2>{name}</h2>
      <p>Year: {year}</p>
      <p>IMDB rating: {rateImdb}</p>
      <p>Genre: {genre}</p>
      <p>{storyLine}</p>
    </div>
  </div>
);

export default Movie;
