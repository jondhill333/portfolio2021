import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

import githubLogo from "../assets/iconmonstr-github-3.svg";
import twitterLogo from "../assets/icons8-twitter.svg";
import linkedInLogo from "../assets/iconmonstr-linkedin-3.svg";
import gmailLogo from "../assets/New_Logo_Gmail.svg";

const FooterStyles = styled.div`
  color: white;
  font-family: "IBM Plex Mono";
  width: 100%;
  text-align: center;
  position: relative;
  bottom: 0;
  border-top: solid var(--white) 1px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  p {
    padding: 0;
    margin: 0;
  }
  span {
    color: var(--orange);
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>
        Jon Hill <span>&#169;</span> 2021
      </p>
    </FooterStyles>
  );
}
