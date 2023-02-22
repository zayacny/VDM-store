import React from "react";
import "./FilmsList.css";
import { useEffect, useState } from "react";

export default function ShowFilmsList() {
  const [filmsList, setFilms] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/films-list")
      .then((response) => response.json())
      .then((data) => setFilms(data.films));
  }, []);

  console.log(filmsList);

  if (!filmsList) {
    return null;
  }

  const listOfFilms = filmsList.map((film) => (
    <li key={film.name}>
      <a href={film.link} className="li-style">
        <div className="left-side">
          {film.name} ({film.year})
        </div>
        <div className="right-side">
          {film.director}, IMDb ({film.rating})
        </div>
      </a>
    </li>
  ));
  return <ul className="div-style">{listOfFilms}</ul>;
}
