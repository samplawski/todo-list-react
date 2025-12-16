import React from "react";
import { StyledSection, Header, Heading, Body } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <Heading>{title}</Heading>
      {extraHeaderContent}
    </Header>

    <Body>{body}</Body>
  </StyledSection>
);

export default Section;
