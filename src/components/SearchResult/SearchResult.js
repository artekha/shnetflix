import React from 'react';

import MoviesList from '../MoviesList';
import DetailedMovie from '../DetailedMovie';

const SearchResult = () => {
  return (
    <React.Fragment>
      <MoviesList></MoviesList>
      <DetailedMovie></DetailedMovie>
    </React.Fragment>
  );
};

export default SearchResult;
