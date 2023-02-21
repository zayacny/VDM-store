import React from "react";
import "./FilmsList.css";

export default function FilmsList(films) {
  let arr = films.films;
  const listOfFilms = arr.map((film) => (
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
// export default function FilmsList(films) {
//   console.log(films);
//   let arr = films.films;
//   const listOfFilms = arr.map((film) => film);
//   return console.log(listOfFilms);
// }
