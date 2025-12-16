import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid hsl(0, 0%, 87%);

  ${({ $hidden }) => $hidden && css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) => $done && css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: hsl(0, 0%, 100%);
  width: 30px;
  height: 30px;
  padding: 0px;
  transition: 0.3s;

  ${({ $toggleDone }) => $toggleDone && css`
      background: hsl(120, 61%, 34%);

      &:hover {
        background: hsl(120, 61%, 44%);
      }

      &:active {
        background: hsl(120, 61%, 54%);
      }
    `}

  ${({ $remove }) => $remove && css`
      background: hsl(348, 83%, 47%);

      &:hover {
        background: hsl(348, 83%, 57%);
      }

      &:active {
        background: hsl(348, 83%, 67%);
      }
    `}
`;
