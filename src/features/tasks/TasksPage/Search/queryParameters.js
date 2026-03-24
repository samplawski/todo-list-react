import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined || value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    history.replace(`${location.pathname}?${searchParams.toString()}`);
  };
};
