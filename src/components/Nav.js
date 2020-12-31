import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

import githubLogo from "../assets/iconmonstr-github-3.svg";
import twitterLogo from "../assets/icons8-twitter.svg";
import linkedInLogo from "../assets/iconmonstr-linkedin-3.svg";
import gmailLogo from "../assets/New_Logo_Gmail.svg";

const NavStyles = styled.div`
  width: 100%;
  height: 75px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  div {
    height: 50%;
  }
`;
const NavGrid = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  color: var(--white);
  border-bottom: 2px solid var(--white);

  .pageLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    a {
      color: var(--white);
      text-decoration: none;
    }
  }
  .contactLinks {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    padding-bottom: 5px;
    padding-top: 0;

    .socialLink {
      margin: 0px 3px 0px 5px;
      transition: all ease-in-out 0.2s;
    }

    .gmail {
      height: 30px;
      width: 30px;
      position: relative;
      bottom: -1px;
      filter: hue-rotate(60deg);
    }

    .gmail:hover {
      filter: none;
    }

    .github {
      filter: invert(1) hue-rotate(180deg);
      height: 24px;
      width: 24px;
    }

    .github:hover {
      filter: invert(0.5);
    }

    .linkedIn {
      filter: invert(1);
      height: 24px;
      width: 24px;
    }

    .linkedIn:hover {
      filter: invert(0.5);
    }

    .twitter {
      height: 27px;
      width: 27px;
      position: relative;
      bottom: 1px;
      margin: 0px 3px 0px 0px;
      filter: invert(1);
    }

    .twitter:hover {
      filter: none;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <NavGrid>
        <div className="logo">Jon Hill</div>
        <div className="pageLinks">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="contactLinks">
          <a className="gmail socialLink" href="mailto:jondhill1984@gmail.com">
            <img src={gmailLogo} alt="Jon-Hill-gmail" />
          </a>
          <a
            className="github socialLink"
            href="https://github.com/jondhill333"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="Jon-Hill-github-page-link-logo" />
          </a>
          <a
            className="linkedIn  socialLink"
            href="https://www.linkedin.com/in/jonathan-hill-1b293339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="Jon-Hill-linkedIn-page-link-logo" />
          </a>
          <a
            className="twitter socialLink"
            href="https://twitter.com/jon_hill33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} alt="Jon-Hill-twitter-page-link-logo" />
          </a>
        </div>
      </NavGrid>
    </NavStyles>
  );
}
