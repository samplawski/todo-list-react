import styled from "styled-components";

export const StyledExampleTasksButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const HeadingExampleTasksButton = styled.button`
  display: inline;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.taskButton};
  transition: ${({ theme }) => theme.transition.time};

  &:hover:not(:disabled) {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active:not(:disabled) {
    filter: brightness(140%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.disabledButton};
    cursor: auto;
  }
`;
