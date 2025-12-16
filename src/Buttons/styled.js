import styled from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const HeadingButton = styled.button`
  display: inline;
  background: none;
  border: none;
  color: hsl(180, 100%, 25%);
  transition: 0.2s;

  &:hover {
    color: hsl(180, 100%, 30%);
    cursor: pointer;
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: hsl(0, 0%, 67%);
    cursor: auto;
  }
`;
