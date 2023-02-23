import React from "react";
import "./Movie.css";
// import ""

const Movie = (movieData) => (
  <div className="movie-container">
    <div className="movie-container-wrapper">
      <div className="movie-header">
        <h2>
          {movieData.name} / {movieData.originalName} ({movieData.year})
        </h2>
      </div>
      <div className="movie-info">
        <div className="movie-image cell">
          <img src={movieData.img} alt={movieData.name} />
        </div>
        <div className="cell">
          <p>Название: </p>
          <p>Оригинальное название:</p>
          <p>IMDB рейтинг: </p>
          <p>Год: </p>
          <p>Страна:</p>
          <p>Режиссер:</p>
          <p>Жанр: </p>
          <p>Время: </p>
        </div>
        <div className="cell">
          <p> {movieData.name}</p>
          <p> {movieData.originalName}</p>
          <p> {movieData.rateImdb}</p>
          <p> {movieData.year}</p>
          <p> {movieData.country}</p>
          <p> {movieData.director}</p>
          <p> {movieData.genre}</p>
          <p> {movieData.duration}</p>
        </div>
      </div>
    </div>
    <div className="movie-story ">
      <p>{movieData.storyLine}</p>
    </div>
  </div>
);

export default Movie;
