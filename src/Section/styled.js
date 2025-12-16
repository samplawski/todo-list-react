import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: white;
`;

export const Header = styled.header`
  border-bottom: 1px solid hsl(0, 0%, 87%);
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
`;

export const Body = styled.div`
  padding: 20px;
`;
