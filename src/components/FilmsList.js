import React from "react";
import "./FilmsListCSS.css";
export default function FilmsList() {
  const filmsMap = films.map((film) => (
    <h1 key={film.name}>
      {film.name}
      <br></br> {film.year}
    </h1>
  ));
  return <div className="divStyle">{filmsMap}</div>;
}

export const films = [
  { name: "titanic", year: "year 1998" },
  { name: "black widow", year: "year 2012" },
  { name: "sherlok", year: "year 2005" },
  { name: "bond", year: "year 1961" },
  { name: "turtles", year: "year 1990" },
];
