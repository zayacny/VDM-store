import React from "react";
import "./Movie.css";

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
