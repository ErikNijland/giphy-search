import {useEffect, useReducer, useRef} from 'react';
import {FetchApiState} from '../../types/fetch-api-state';

export default function useFetchApi<ApiResponse>(url: string): FetchApiState<ApiResponse> {
  const initialState: FetchApiState<ApiResponse> = {
    isLoading: true,
    response: null,
    error: null,
  };

  type Action =
    | { type: 'FETCH' }
    | { type: 'SUCCESS', payload: ApiResponse }
    | { type: 'ERROR', payload: Error }

  function reducer (state: FetchApiState<ApiResponse>, action: Action) {
    switch (action.type) {
      case 'FETCH':
        return initialState;

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

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const lastAbortController = useRef<AbortController>();

  useEffect(() => {
    dispatch({ type: 'FETCH' });

    if (lastAbortController.current) {
      lastAbortController.current.abort();
    }

    const currentAbortController = new AbortController();
    lastAbortController.current = currentAbortController;
    const { signal } = currentAbortController;

    fetch(url, { signal })
      .then((response) => response.json())
      .then(
        (response) => dispatch({ type: 'SUCCESS', payload: response }),
        (error) => () => dispatch({ type: 'ERROR', payload: error }),
      );
  }, [ url ]);

  return state;
}