import { useLocation } from "react-router-dom";

export default function useSearch(key: string) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
}