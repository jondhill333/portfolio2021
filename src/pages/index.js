import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import profilePic from "../assets/portfolioPic.png";
import Footer from "../components/Footer";

const HomePageStyles = styled.div`
  width: 100%;
  margin: 0% auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  section {
    display: flex;
    flex-direction: row;
  }

  img {
    border-radius: 50%;
    width: 400px;
    height: 400px;
  }
  .about {
    color: var(--white);
    padding: 0 0 0 4vw;
    line-height: 1.4;
    font-size: 3rem;
    text-align: justify;
    font-family: "Kalam";
  }
  .indexPageFooter {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;

export default function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <HomePageStyles>
        <section>
          <img src={profilePic} alt="Jon Hill" />
          <div className="about">
            The actual UI borrows heavily from the Guardian website but as I am
            trying to become a developer as opposed to a designer, I believed
            this a fair pay off - allowing me to focus more on the technical
            implementation as I had a 'design template' to work from.
          </div>
        </section>
        <div className="indexPageFooter">
          <Footer />
        </div>
      </HomePageStyles>
    </>
  );
}
