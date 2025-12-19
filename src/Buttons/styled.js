import styled from "styled-components";

export const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const HeadingButton = styled.button`
  display: inline;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.taskButton};
  transition: ${({ theme }) => theme.transition.time};

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(140%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disabledButton};
    cursor: auto;
  }
`;
