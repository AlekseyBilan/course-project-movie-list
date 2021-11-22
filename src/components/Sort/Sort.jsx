import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import iconsSort from "../../images/icons/iconsSort.svg";

const sortSectionStyles = {
  display: "flex",
  flexWrap: "nowrap",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
};

const Sort = ({ items }) => {
  const [movies, SetMovies] = useState([]);
  const [checked, SetChecked] = useState(false);

  const sortAsc = (b, a) => a.popularity - b.popularity;
  const sortDesc = (a, b) => a.popularity - b.popularity;

  const onChangeHandler = (e) => {
    SetChecked(e.target.checked);
  };

  useEffect(() => {
    if (checked) {
      SetMovies([...movies].sort(sortDesc));
    } else {
      SetMovies([...movies].sort(sortAsc));
    }
  }, [checked]);

  useEffect(() => {
    SetMovies(items?.results);
  }, [items]);

  return (
    <>
      {movies ? (
        <section style={sortSectionStyles}>
          <h3>Sort section:</h3>
          <label className="popularity-wrap">
            <input
              type="checkbox"
              onChange={onChangeHandler}
              checked={checked}
              style={{ display: "none" }}
            />
            {checked ? (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use xlinkHref={`${iconsSort + "#asc"}`} />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use xlinkHref={`${iconsSort + "#dec"}`} />
              </svg>
            )}
            Popularity {checked ? "descending" : "ascending"}
          </label>
        </section>
      ) : (
        ""
      )}
      <MovieList movies={movies} />
    </>
  );
};

export default Sort;
