import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavigation = styled.nav`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.navigationBackground};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMa}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.color.buttonText};
  text-decoration: none;
  font-size: 18px;

  &.${activeClassName} {
    font-weight: bold;
  }
`;
