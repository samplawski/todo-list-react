import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.color.taskButton};
  transition: filter ${({theme}) => theme.transition.time};

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;



export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.buttonText};
  width: 30px;
  height: 30px;
  padding: 0px;
  transition: ${({ theme }) => theme.transition.time};
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background: ${({ theme }) => theme.color.toggleDoneButton};
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background: ${({ theme }) => theme.color.deleteButton};
    `}
`;
