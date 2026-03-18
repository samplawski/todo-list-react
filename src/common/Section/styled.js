import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.color.elementBakground};
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding: 20px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
`;

export const Body = styled.div`
  padding: 20px;
`;
