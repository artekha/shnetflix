import React from 'react';
import { withRouter } from 'react-router-dom';

import { API_ENDPOINT } from '../../helpers/endpoints';
import { useFetch } from '../../helpers/hooks';

const MoviesList = ({ history }) => {
  const { serverResponse, serverError } = useFetch(API_ENDPOINT, {
    s: '',
  });
  console.log(history);
  return <h1>Movies List</h1>;
};

export default withRouter(MoviesList);
