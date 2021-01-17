import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import profilePic from "../assets/portfolioPic.png";
import Footer from "../components/footer";

const HomePageStyles = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 8% 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: row;
  }
  .profilePicture {
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
    display: flex;
    align-items: center;
  }
  .indexPageFooter {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  @media (max-width: 1000px) {
    img {
      width: 300px;
      height: 300px;
    }
    .about {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 650px) {
    .profilePicture {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    img {
      width: 250px;
      height: 250px;
    }
    section {
      flex-direction: column;
    }
    .about {
      font-size: 2rem;
      margin: 30px 0 0 0;
      padding: 0;
    }
  }
`;

export default function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <HomePageStyles>
        <section>
          <div className="profilePicture">
            <img src={profilePic} alt="Jon Hill" />
          </div>
          <div className="about">
            Hi, I&#39;m Jon and I’m a developer based in Crete, Greece. I mainly
            focus on the Front End with an aim to go Full Stack. I want to build
            simple, performant and great looking products. I like panda&#39;s,
            red wine and mountains &#46;&#46;&#46; amongst others things.
          </div>
        </section>
        <div className="indexPageFooter">
          <Footer />
        </div>
      </HomePageStyles>
    </>
  );
}
