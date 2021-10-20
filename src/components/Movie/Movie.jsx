import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './styles.scss';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  align-self: flex-end;
`;

function Movie({movie}) {
  const title = movie.title.replace(/ /g, '-');
  const src = movie.poster_path ? process.env.REACT_APP_IMG_PATH + movie.poster_path : 'https://via.placeholder.com/600/771796';
  
  return(
    <section className="movie-wrap" data-id={movie.id}>
          <div className="image-wrapper">
            <img 
                className="movie-icon" 
                src={src}
                alt={movie.title}
            />
          </div>
          <div className="about-movie-content">
              <h4 className="movie-title">{movie.title}</h4>
              <span className="overview">
                  {movie.overview}
              </span>
          </div>
          <StyledLink to={{ pathname: 'https://www.themoviedb.org/movie/'+ movie.id +'-'+ title }} target="_blank">Read more abaut movie at themoviedb.org </StyledLink>
      </section>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string
  })
}

export default Movie;
