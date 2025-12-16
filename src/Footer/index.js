import React from "react";
import { StyledFooter, Link } from "./styled.js";

const Footer = () => (
  <StyledFooter>
    <p>Tomasz Sampławski 2025</p>
    <p>
      <Link
        href="mailto:tsamplawski@gmail.com"
        title="tworzy wiadomość zaadresowaną do mnie"
      >
        wyślij do mnie wiadomość
      </Link>
    </p>
    <p>
      <Link
        $git
        href="https://github.com/samplawski/todo-list-react"
        title="otwiera stronę projektu na GitHub"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub-icon"
        />
      </Link>
    </p>
  </StyledFooter>
);

export default Footer;
