import { List, StyledNavigation, StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <List>
      <li>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </li>
    </List>
  </StyledNavigation>
);

export default Navigation;
