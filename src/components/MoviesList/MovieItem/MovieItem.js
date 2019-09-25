import React from 'react';
import PropTypes from 'prop-types';

import './MovieItem.scss';

const MovieItem = ({ movie, setDetailedMovie }) => (
  <div className="movie-item" onClick={() => setDetailedMovie(movie.imdbID)}>
    <div className="movie-item__poster">
      <img src={movie.Poster} alt="Movie poster" />
    </div>
    <div className="movie-item__info">
      <h3 className="movie-item__title">{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  movie: PropTypes.shape().isRequired,
  setDetailedMovie: PropTypes.func.isRequired,
};

export default MovieItem;
