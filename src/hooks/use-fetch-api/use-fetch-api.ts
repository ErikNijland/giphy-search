import {useEffect, useReducer} from 'react';
import {FetchApiState} from '../../types/fetch-api-state';

export default function useFetchApi<ApiResponse>(url: string): FetchApiState<ApiResponse> {
  type Action =
    | { type: 'SUCCESS', payload: ApiResponse }
    | { type: 'ERROR', payload: Error }

  function reducer (state: FetchApiState<ApiResponse>, action: Action) {
    switch (action.type) {
      case 'SUCCESS':
        return {
          ...state,
          isLoading: false,
          response: action.payload,
        };

      case 'ERROR':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  }

  const [ state, dispatch ] = useReducer(reducer, {
    isLoading: true,
    response: null,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (response) => dispatch({ type: 'SUCCESS', payload: response }),
        (error) => dispatch({ type: 'ERROR', payload: error })
      );
  }, [ url ]);

  return state;
}