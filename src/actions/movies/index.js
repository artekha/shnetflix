import { createAction, handleActions } from 'redux-actions';
import { API_ENDPOINT } from '../../helpers/endpoints';
import { useFetch } from '../../helpers/hooks';

const fetchMoviesRequest = createAction('MOVIES_FETCH_REQUEST');
const fetchMoviesResponse = createAction('MOVIES_FETCH_RESPONSE');
export const resetMovies = createAction('MOVIES_RESET');

export const fetchMovies = searchValue => async dispatch => {
  dispatch(fetchMoviesRequest());
  try {
    // const response = await new Promise(resolve => {
    //   setTimeout(() => resolve('Hello'), 2000);
    // });
    useFetch(API_ENDPOINT, {
      s: searchValue,
    });
    // dispatch(fetchMoviesResponse(response));
    // console.log(response);
  } catch (error) {
    console.log(error);
    dispatch(fetchMoviesResponse(error));
  }
};

const requested = handleActions(
  {
    [fetchMoviesRequest]: () => true,
    [fetchMoviesResponse]: () => false,
  },
  false,
);
