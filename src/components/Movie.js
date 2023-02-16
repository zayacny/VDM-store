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
      <div className="movie-info">
        <div className="movie-image cell">
          <img src={img} alt={name} />
        </div>
        <div className="general-info cell">
          <p>Название: {name}</p>
          <p>Оригинальное название: {originalName}</p>
          <p>IMDB рейтинг: {rateImdb}</p>
          <p>Год: {year}</p>
          <p>Страна: {country}</p>
          <p>Режиссер: {director}</p>
          <p>Genre: {genre}</p>
          <p>Время: {duration}</p>
        </div>
      </div>
    </div>
    <div className="movie-story ">
      <p>{storyLine}</p>
    </div>
  </div>
);

export default Movie;
