import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({movie}) {
  let title = movie.title.replace(/ /g, '-')
  return(
    <section className="movie-list" data-id={movie.id}>
          <div className="image-wrapper">
            <img 
                className="movie-icon" 
                src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                alt={movie.title}
            />
          </div>
          <div className="about-movie-content">
              <h4 className="movie-title">{movie.title}</h4>
              <span className="overview">
                  {movie.overview}
              </span>
          </div>
          <a target="_blank" href={'https://www.themoviedb.org/movie/'+ movie.id +'-'+ title } rel="noreferrer">go to A</a>
          <br/>
          <Link to={{ pathname: 'https://www.themoviedb.org/movie/'+ movie.id +'-'+ title }} target="_blank">go to { movie.title}</Link>
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
