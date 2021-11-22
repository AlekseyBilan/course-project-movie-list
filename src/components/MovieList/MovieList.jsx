import React from "react";
import Movie from "../Movie/Movie";

const styles = {
  textAlign: "center",
};

const moviesContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
};

function MovieList({ movies }) {
  let result = "Type search request, to find some movie";
  if (movies) {
    result = movies.map((movie, index) =>
      movie.title ? <Movie movie={movie} key={index} /> : null
    );
  } else if (Array.isArray(movies)) {
    result = "not found";
  }
  return (
    <div className="MovieList" style={styles}>
       <section className="movies-container" style={moviesContainer}>
         {result}
       </section>
    </div>
  );
}

export default MovieList;