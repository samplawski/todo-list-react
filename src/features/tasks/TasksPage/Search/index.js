import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchPatams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchPatams.delete(searchQueryParamName);
    } else {
      searchPatams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchPatams.toString()}`);
  };

  return (
    <Wrapper>
      <Input
        value={query || ""}
        placeholder="Filtruj zadania"
        title="Wpisz wyszukiwaną frazę / fragment tekstu."
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
