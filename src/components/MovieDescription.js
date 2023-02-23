import React, { useEffect, useState } from "react";
import "./MovieDescription.css";

export default function MovieDescription() {
  const [movieDescriptionData, setMovieDescriptionData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/movie-data")
      .then((response) => response.json())
      .then((data) => setMovieDescriptionData(data.movieData));
  }, []);

  if (!movieDescriptionData) {
    return null;
  }

  return (
    <>
      <h2 className="movie-description-header">
        {movieDescriptionData.name} / {movieDescriptionData.originalName} (
        {movieDescriptionData.year})
      </h2>
      <div className="movie-description-info">
        <div className="movie-description-image movie-description-body">
          <img src={movieDescriptionData.img} alt={movieDescriptionData.name} />
        </div>
        <div className="movie-description-body">
          <p>Название: </p>
          <p>Оригинальное название:</p>
          <p>IMDB рейтинг: </p>
          <p>Год: </p>
          <p>Страна:</p>
          <p>Режиссер:</p>
          <p>Жанр: </p>
          <p>Время: </p>
        </div>
        <div className="movie-description-body">
          <p> {movieDescriptionData.name}</p>
          <p> {movieDescriptionData.originalName}</p>
          <p> {movieDescriptionData.rateImdb}</p>
          <p> {movieDescriptionData.year}</p>
          <p> {movieDescriptionData.country}</p>
          <p> {movieDescriptionData.director}</p>
          <p> {movieDescriptionData.genre}</p>
          <p> {movieDescriptionData.duration}</p>
        </div>
      </div>
      <div className="movie-description-story ">
        <p>{movieDescriptionData.storyLine}</p>
      </div>
    </>
  );
}
