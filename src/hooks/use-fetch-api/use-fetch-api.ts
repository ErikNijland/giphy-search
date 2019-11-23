import {useEffect, useReducer, useRef} from "react";
import {IFetchApiState} from "../../types/fetch-api-state";

export default function useFetchApi<ApiResponse>(url: string): IFetchApiState<ApiResponse> {
  const initialState: IFetchApiState<ApiResponse> = {
    error: null,
    isLoading: true,
    response: null,
  };

  type Action =
    | { type: "FETCH" }
    | { type: "SUCCESS", payload: ApiResponse }
    | { type: "ERROR", payload: Error };

  function reducer(previousState: IFetchApiState<ApiResponse>, action: Action) {
    switch (action.type) {
      case "FETCH":
        return initialState;

      case "SUCCESS":
        return {
          ...previousState,
          isLoading: false,
          response: action.payload,
        };

      case "ERROR":
        return {
          ...previousState,
          error: action.payload,
          isLoading: false,
        };

      default:
        return previousState;
    }
  }

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const lastAbortController = useRef<AbortController>();

  useEffect(() => {
    dispatch({ type: "FETCH" });

    cancelLastFetch();

    const currentAbortController = new AbortController();
    lastAbortController.current = currentAbortController;
    const { signal } = currentAbortController;

    fetch(url, { signal })
      .then((response) => response.json())
      .then(
        (response) => dispatch({ type: "SUCCESS", payload: response }),
        (error) => () => dispatch({ type: "ERROR", payload: error }),
      );

    return cancelLastFetch;
  }, [ url ]);

  return state;

  function cancelLastFetch() {
    if (lastAbortController.current) {
      lastAbortController.current.abort();
    }
  }
}
