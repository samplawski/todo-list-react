import { toAuthor, toTasks } from "../../routes";
import { List, StyledNavigation, StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <List>
      <li>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </li>
    </List>
  </StyledNavigation>
);

export default Navigation;
