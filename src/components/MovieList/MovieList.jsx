import React from 'react';
import Movie from "../Movie/Movie";

function MovieList({props}) {
  const movies = props?.results;
  let result = 'Type search request, to find some movie';
  if(movies && movies.length) {
    result = movies.map((movie, index) => (
      movie.title ? <Movie movie={movie} key={index}/> : null
    ))
  } else if(Array.isArray(movies)) {
    result = 'not found';
  }
  return (
    <div className="MovieList">
        { result }
    </div>
  );
}

export default MovieList;
