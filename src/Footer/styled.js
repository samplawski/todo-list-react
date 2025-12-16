import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  overflow-x: auto;
  background-color: hsl(0, 100%, 99%);
  margin: 30px auto 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  text-align: center;
  font-size: 15px;
  letter-spacing: 0.1em;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  color: hsl(182, 25%, 50%);
  text-decoration: none;

  &:hover {
    color: hsl(182, 25%, 35%);
    border-bottom: 1px solid;
    outline: none;
  }

  ${({ $git }) => $git && css`
      img {
        max-width: 30px;
        max-height: 30px;
        border-radius: 50%;
      }

      &:hover {
        text-decoration: none;
        border-bottom: none;
      }
    `}
`;
