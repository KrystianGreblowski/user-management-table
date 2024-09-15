import { useLocation, useNavigate } from "react-router";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }: { key: string; value?: string }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value !== undefined) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };
};
