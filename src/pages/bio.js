import * as React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import CV from "../assets/Jonathan_Hill_CV_WD.pdf";

import Footer from "../components/footer";

const BioPageStyles = styled.div`
  width: 80%;
  height: 1100px;
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
    font-size: 2.5rem;
  }
  a {
    &:hover {
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
`;

export default function ContactPage() {
  return (
    <>
      <SEO title="Home" />
      <BioPageStyles>
        <h1 className="pageTitle">Bio</h1>
        <section className="technicals">
          <h2>Technicals</h2>
          <ul>
            <li>I wrote my first line of code on 30th March 2019</li>
            <li>
              Confident with React, Javascript, CSS, HTML, Styled Components
            </li>
            <li>Experienced with Next.js, Gatsby and SASS </li>
            <li>
              I'm getting better at Typescript, Test Driven Development and Node
            </li>
          </ul>
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
          <h2>Experience areas</h2>
          <ul>
            <li>Administrative &#47; support functions &#45; 2 years</li>
            <li>Customer service &#45; 6 years</li>
            <li>Product ownership &#47; project management &#45; 2 years</li>
            <li>Account management &#47; client service &#45; 3 years </li>
          </ul>
        </section>
      </BioPageStyles>
      <div className="bioPageFooter">
        <Footer />
      </div>
    </>
  );
}
