import React from "react";
import "./Movie.css";

const Movie = ({ img, name, year, rateImdb, genre, storyLine }) => (
  <div className="movie-container">
    <div className="movie-container-wrapper">
      <div className="movie-info">
        <div className="movie-image cell">
          <img src={img} alt={name} />
        </div>
        <div className="general-info cell">
          <h3>General info:</h3>
          <p>Name: {name}</p>
          <p>Year: {year}</p>
          <p>IMDB rating: {rateImdb}</p>
          <p>Genre: {genre}</p>
        </div>
      </div>

      <div className="movie-story ">
        <h3>StoryLine:</h3>
        <p>{storyLine}</p>
      </div>
    </div>
  </div>
);

export default Movie;
