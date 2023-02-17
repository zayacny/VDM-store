import React from "react";
import "./FilmsList.css";
const films = [
  {
    name: "titanic",
    year: 1998,
    link: "http://baskino.me/films/dramy/585-titanik.html",
  },
  {
    name: "black widow",
    year: 2012,
    link: "http://baskino.me/films/boeviki/28579-chernaya-vdova.html",
  },
  {
    name: "sherlok",
    year: 2005,
    link: "http://baskino.me/serial/2334-sherlok.html",
  },
  {
    name: "bond",
    year: 1961,
    link: "http://baskino.me/films/boeviki/12500-007-spektr.html",
  },
  {
    name: "turtles",
    year: 1990,
    link: "http://baskino.me/films/boevie-iskustva/9830-cherepashki-nindzya.html",
  },
];

export default function FilmsList() {
  const listOfFilms = films.map((film) => (
    <li key={film.name}>
      <a href={film.link} className="liStyle">
        {film.name} ({film.year})
      </a>
    </li>
  ));
  return <ol className="divStyle">{listOfFilms}</ol>;
}
