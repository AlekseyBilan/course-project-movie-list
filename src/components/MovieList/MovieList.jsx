import React from 'react';
import Movie from "../Movie/Movie";

function MovieList({props}) {
  const movies = props?.data?.results;

  return (
    <div className="MovieList">
        {
        movies.map((movie, index) => (
            movie.title ? <Movie movie={movie} key={index}/> : null
        ))
        }
    </div>
  );
}

export default MovieList;
