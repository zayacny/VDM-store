import React, { useEffect, useState } from "react";
import "./FilmsList.css";

export default function FilmsList() {
  const [filmsList, setFilmsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/films-list")
      .then((response) => response.json())
      .then((data) => setFilmsList(data.films));
  }, []);

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
