import React from "react";
import "./Movie.css";
// import ""

const Movie = ({
  img,
  name,
  originalName,
  rateImdb,
  year,
  country,
  director,
  genre,
  duration,
  storyLine,
}) => (
  <div className="movie-container">
    <div className="movie-container-wrapper">
      <h2 className="Movie-header">
        {name} / {originalName} ({year})
      </h2>
      <div className="movie-info">
        <div className="movie-image cell">
          <img src={img} alt={name} />
        </div>
        <div className="general-info cell">
          <p>Название: </p>
          <p>Оригинальное название:</p>
          <p>IMDB рейтинг: </p>
          <p>Год: </p>
          <p>Страна:</p>
          <p>Режиссер:</p>
          <p>Жанр: </p>
          <p>Время: </p>
        </div>
        <div className="general-info cell">
          <p> {name}</p>
          <p> {originalName}</p>
          <p> {rateImdb}</p>
          <p> {year}</p>
          <p> {country}</p>
          <p> {director}</p>
          <p> {genre}</p>
          <p> {duration}</p>
        </div>
      </div>
    </div>
    <div className="movie-story ">
      <p>{storyLine}</p>
    </div>
  </div>
);

export default Movie;
