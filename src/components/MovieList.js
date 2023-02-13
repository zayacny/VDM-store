import React from "react";
import Movie from "./Movie";
import "./MovieList.css";

const MovieList = () => (
  <div className="movie-list">
    <Movie
      img="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      name="The Shawshank Redemption"
      year={1994}
      rateImdb={9.2}
      genre="drama"
      storyLine="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    />
    <Movie
      img="https://m.media-amazon.com/images/M/MV5BM2JlMjQ1MjItNmJjMS00Nzg1LTk4ZDItNDgyNjg2OTliMWM5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX580_.jpg"
      name="Old School"
      year={2003}
      rateImdb={7.0}
      genre="comedy"
      storyLine="Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater"
    />
    <Movie
      img="https://m.media-amazon.com/images/M/MV5BM2JlMjQ1MjItNmJjMS00Nzg1LTk4ZDItNDgyNjg2OTliMWM5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX580_.jpg"
      name="Old School"
      year={2003}
      rateImdb={7.0}
      genre="comedy"
      storyLine="Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater"
    />
    <Movie
      img="https://m.media-amazon.com/images/M/MV5BM2JlMjQ1MjItNmJjMS00Nzg1LTk4ZDItNDgyNjg2OTliMWM5XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_FMjpg_UX580_.jpg"
      name="Old School"
      year={2003}
      rateImdb={7.0}
      genre="comedy"
      storyLine="Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater"
    />
    <Movie
      img="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UY720_.jpg"
      name="Titanic"
      year={1998}
      rateImdb={8.9}
      genre="drama"
      storyLine="A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    />
  </div>
);

export default MovieList;
