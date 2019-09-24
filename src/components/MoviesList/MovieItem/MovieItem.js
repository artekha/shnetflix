import React from 'react';
import PropTypes from 'prop-types';

import './MovieItem.scss';

const MovieItem = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie-item">
      <div className="movie-item__poster">
        <img src={movie.Poster} alt="Movie poster" />
      </div>
      <div className="movie-item__info">
        <h3 className="movie-item__title">{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape.isRequired,
};

export default MovieItem;
