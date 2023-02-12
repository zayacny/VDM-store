import React from "react";
import "./FilmsListCSS.css";
export const films = [
  { name: "titanic", year: 1998 },
  { name: "black widow", year: 2012 },
  { name: "sherlok", year: 2005 },
  { name: "bond", year: 1961 },
  { name: "turtles", year: 1990 },
];

export default function FilmsList() {
  const filmsMap = films.map((film) => (
    <li key={film.name}>
      {film.name} ({film.year})
    </li>
  ));
  return <ol className="divStyle">{filmsMap}</ol>;
}
