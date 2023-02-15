import React from "react";
import Movie from "./Movie";
import "./MovieList.css";
import moviesData from "./moviesData";
import { Link } from "react-router-dom";

const MovieList = () => (
  <div className="movie-list">
    {moviesData.map((movie) => (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <Movie
          img={movie.img}
          name={movie.name}
          year={movie.year}
          rateImdb={movie.rateImdb}
          genre={movie.genre}
          storyLine={movie.storyLine}
        />
      </Link>
    ))}
  </div>
);

export default MovieList;
