import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid hsl(0, 0%, 87%);
`;

export const Button = styled.button`
  color: hsl(0, 0%, 100%);
  background: hsl(180, 100%, 25%);
  padding: 10px;
  border: none;
  transition: 0.5s;

  &:hover {
    background: hsl(180, 100%, 30%);
    transform: scale(1.1);
    cursor: pointer;
  }

  &:active {
    background: hsl(180, 100%, 35%);
  }
`;
