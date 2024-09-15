import { useLocation } from "react-router";

export const useQueryParameter = (searchQueryParamName: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(searchQueryParamName);
};
