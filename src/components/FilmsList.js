import React, { useEffect, useState } from "react";
import "./FilmsList.css";

export default function FilmsList() {
  const [filmsList, setFilmsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/films-list")
      .then((response) => response.json())
      .then((films) => setFilmsList(films));
  }, []);

  const listOfFilms = filmsList.map((film) => (
    <li key={film.name}>
      <a href={film.link} className="film-link-body">
        <div className="film-link-position-left">
          {film.name} ({film.year})
        </div>
        <div className="film-link-position-right">
          {film.director}, IMDb ({film.rating})
        </div>
      </a>
    </li>
  ));
  return <ul className="films-list-body">{listOfFilms}</ul>;
}
