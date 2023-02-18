import React from "react";
import "./FilmsList.css";
const films = [
  {
    name: "titanic",
    year: 1998,
    link: "http://baskino.me/films/dramy/585-titanik.html",
    director: "Kendrick Lamar",
    rating: 8.88,
  },
  {
    name: "black widow",
    year: 2012,
    link: "http://baskino.me/films/boeviki/28579-chernaya-vdova.html",
    director: "J. Lopez",
    rating: 8.88,
  },
  {
    name: "sherlok",
    year: 2005,
    link: "http://baskino.me/serial/2334-sherlok.html",
    director: "C. Diaz",
    rating: 8.88,
  },
  {
    name: "bond",
    year: 1961,
    link: "http://baskino.me/films/boeviki/12500-007-spektr.html",
    director: "P. Brosnan",
    rating: 8.88,
  },
  {
    name: "turtles",
    year: 1990,
    link: "http://baskino.me/films/boevie-iskustva/9830-cherepashki-nindzya.html",
    director: "M. Jackson",
    rating: 8.88,
  },
];

export default function FilmsList() {
  const listOfFilms = films.map((film) => (
    <li key={film.name}>
      <a href={film.link} className="liStyle">
        <div className="leftSide">
          {film.name} ({film.year})
        </div>
        <div className="rightSide">
          {film.director}, IMDb ({film.rating})
        </div>
      </a>
    </li>
  ));
  return <ul className="divStyle">{listOfFilms}</ul>;
}
