export interface FetchApiState<T> {
  isLoading: boolean;
  response: T | null;
  error: Error | null;
}