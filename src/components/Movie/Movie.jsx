import React from 'react';
import PropTypes from 'prop-types';

function Movie({movie}) {
  return(
      <section className="movie-list" data-id={movie.id}>
          <div className="image-wrapper">
            <img 
                className="movie-icon" 
                //w94_and_h141_bestv2
                //https://image.tmdb.org/t/p/w94_and_h141_bestv2/biRxGAHSPNdJwJB7l5796pDtVph.jpg
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
