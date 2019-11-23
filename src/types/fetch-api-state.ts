export interface IFetchApiState<T> {
  isLoading: boolean;
  response: T | null;
  error: Error | null;
}
