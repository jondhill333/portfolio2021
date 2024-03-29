import * as React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import CV from "../assets/Jonathan_Hill_CV_WD.pdf";

import Footer from "../components/footer";

const BioPageStyles = styled.div`
  width: 80%;
  height: auto;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
  font-family: "IBM Plex Mono";
  color: var(--white);

  section {
    line-height: 1.6;
    margin-bottom: 4vh;
  }
  h2 {
    font-size: 2.7rem;
  }
  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }
  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: var(--orange);
    }
  }
  .skillsGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 2% auto 0 auto;
    justify-content: center;
    font-size: 1.8rem;
    row-gap: 30px;


    span {
      color: var(--orange);
    }
  }
    .bioPageFooter {
      position: relative;
      width: 100%;
      margin: 0 auto;
      bottom: 0;
      left: 0;
    }
    @media (max-width: 1250px) {
      width: 90%;
    }
    @media (max-width: 750px) {
      width: 100%;
      section {
        line-height: 1.3;
      }
      h1 {
        font-size: 3.5rem;
        margin: 2% 0 2% 0%;
      }
      h2 {
        font-size: 2rem;
      }
      li {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 500px) {
      .skillsGrid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        font-size: 1.6rem;
        row-gap: 10px;
        margin-top: 5%;

      }
      .skillsGrid span {
        text-align:center;
      }
    }
`;

export default function ContactPage() {
  return (
    <>
      <SEO title="Home" />
      <BioPageStyles>
        <h1 className="pageTitle">Bio</h1>
        <section className="technicals">
          <h2>Technical Skills</h2>
          <div className="skillsGrid">
            <span>React</span>
            <span>Typescript</span>
            <span>Git</span>
            <span>PostgresQL</span>
            <span>Nest.js</span>
            <span>Wordpress</span>
            <span>Next.js</span>
            <span>Gatsby</span>
            <span>CSS</span>
            <span>Styled Components</span>
            <span>Google Analytics</span>
            <span>Google Tag Manager</span>
          </div>
        </section>
        <section className="values">
          <h2>Values</h2>
          <ul>
            <li>
              Always be pleasant to work with, particularly when the pressure is
              on
            </li>
            <li>
              Let&#39;s always do something in the best way and if we think
              we&#39;re not, we should take time to change. It will benefit us
              in the future. 
            </li>
            <li>Comfort zones are for relaxation purposes only. </li>
            <li>Let's do great work, and have fun doing it </li>
          </ul>
        </section>
        <section className="skills">
          <h2>Soft skills</h2>
          <ul>
            <li>
              Communication &#45; I listen attentively and when it&#39;s my turn
              to speak I always try to be clear and concise
            </li>
            <li>
              Productive &#45; I get on with it and pride myself in turning out
              high quality work on&#45;time
            </li>
            <li>
              Reliable &#45; I am very self motivated and keen to succeed, so
              you can rely on me to deliver  
            </li>
          </ul>
        </section>

        <section className="experience">
          <h2>Other relevant skills and experience </h2>
          <ul>
            <li>Remote work experience</li>
            <li>I have worked as part of a cross-functional agile team</li>
          </ul>
        </section>
        <section>
          <p className="resume">
            Please find a downloadable version of my current resume/CV{" "}
            <a href={CV} download>
              here
            </a>
            .
          </p>
        </section>
      </BioPageStyles>
      <div className="bioPageFooter">
        <Footer />
      </div>
    </>
  );
}
