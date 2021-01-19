import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import githubLogo from "../assets/iconmonstr-github-3.svg";
import twitterLogo from "../assets/icons8-twitter.svg";
import linkedInLogo from "../assets/iconmonstr-linkedin-3.svg";
import gmailLogo from "../assets/New_Logo_Gmail.svg";

const NavStyles = styled.div`
  height: 50px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  color: var(--white);
  border-bottom: 2px solid var(--white);
  align-items: center;

  .logo {
    font-family: "Kalam";
    font-size: 3.2rem;
    padding: 0 0 0 5px;
    transform: translateY(5px);
    transform: translateY(1px) rotate(-2deg);
  }

  .pageLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: "IBM Plex Mono";
    transform: translateY(1px);

    a {
      color: var(--white);
      text-decoration: none;
      &[aria-current] {
        color: var(--yellow);
        text-decoration: underline;
      }
    }
  }
  .contactLinks {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    padding-bottom: 4px;
    padding-top: 0;

    .socialLink {
      margin: 0px 8px 0px 8px;
      transition: all ease-in-out 0.2s;
    }

    .gmail {
      height: 29px;
      width: 28px;
      position: relative;
      bottom: 0px;
      filter: hue-rotate(60deg);
    }

    .gmail:hover {
      filter: none;
    }

    .github {
      filter: invert(1) hue-rotate(180deg);
      height: 23px;
      width: 23px;
    }

    .github:hover {
      filter: invert(0.5);
    }

    .linkedIn {
      filter: invert(1);
      height: 23px;
      width: 23px;
    }

    .linkedIn:hover {
      filter: invert(0.5);
    }

    .twitter {
      height: 28px;
      width: 28px;
      position: relative;
      bottom: 0px;
      margin: 0px 4px 0px 0px;
      filter: invert(1);
    }

    .twitter:hover {
      filter: none;
    }
  }
  [aria-current] {
    color: var(--orange);
  }
  @media (max-width: 750px) {
    height: 40px;
    .logo {
      font-size: 2.5rem;
    }
    .pageLinks {
      font-size: 1.8rem;
    }
    .contactLinks {
      .gmail {
        height: 22px;
        width: 21px;
      }
      .github {
        height: 17px;
        width: 17px;
      }
      .linkedIn {
        height: 17px;
        width: 17px;
      }
      .twitter {
        height: 21px;
        width: 21px;
      }
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 35px 35px;
    gap: 0;
    height: auto;
    margin: 5px 0 0 0;

    .logo {
      grid-column: 1;
      font-size: 2.9rem;
      padding-left: 25px;
      transform: translateY(5px) rotate(-2deg);
    }
    .pageLinks {
      grid-row: 2;
      grid-column: 1 / -1;
      font-size: 1.6rem;
    }
    .contactLinks {
      grid-column: 2;
      justify-content: start;
      padding-left: 5px;
      .gmail {
        height: 25px;
        width: 23px;
      }
      .github {
        height: 20px;
        width: 20px;
      }
      .linkedIn {
        height: 20px;
        width: 20px;
      }
      .twitter {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="logo">Jon Hill</div>
      <nav role="navigation" className="pageLinks">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
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
    </NavStyles>
  );
}
