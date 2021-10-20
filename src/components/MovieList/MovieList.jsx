import React, {useEffect, useState} from "react";
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

const sortSectionStyles = {
    display: 'flex',
    flexWrap: 'nowrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
};

function MovieList({ props }) {
  const [movies, SetMovies] = useState([]);
  const [checked, SetChecked] = useState(false);

  const sortAsc = (b, a) => a.popularity - b.popularity;
  const sortDesc = (a, b) => a.popularity - b.popularity;

  const onChangeHandler = (e) => {
    SetChecked(e.target.checked);
  }

  useEffect(() => {
    if(checked){
      SetMovies([...movies].sort(sortDesc));
    } else {
      SetMovies([...movies].sort(sortAsc));
    }
  }, [checked]);

  useEffect(() => {
    SetMovies(props?.results);
  }, [props]);

  let result = "Type search request, to find some movie";
  let disabled = true;
  if (movies) {
    disabled = false;
    result = movies.map((movie, index) =>
      movie.title ? <Movie movie={movie} key={index} /> : null
    );
  } else if (Array.isArray(movies)) {
    result = "not found";
  }
  return (
    <div className="MovieList" style={styles}>
      {movies ?
      <section style={sortSectionStyles}>
        <h3>Sort section:</h3>
        <label>
          <input 
            type="checkbox"
            onChange={onChangeHandler}
            checked={checked}
            disabled={disabled}
          />
          Popularity { checked ? 'descending' : 'ascending'}
        </label>
        </section>
       : ''}
       <section className="movies-container" style={moviesContainer}>
         {result}
       </section>
    </div>
  );
}

export default MovieList;