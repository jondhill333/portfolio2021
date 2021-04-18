import * as React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import CV from "../assets/Jonathan_Hill_CV_WD.pdf";

import Footer from "../components/footer";

const ContactPageStyles = styled.div`
  width: 80%;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
  font-family: "IBM Plex Mono";
  color: var(--white);
  section {
    margin-bottom: 4vh;
  }
  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: var(--orange);
    }
  }
  .contactPageFooter {
    position: absolute;
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
    p {
      font-size: 1.8rem;
    }
  }
`;

export default function ContactPage() {
  return (
    <>
      <SEO title="Home" />
      <ContactPageStyles>
        <section>
          <h1 className="pageTitle">Contact</h1>
          <p className="intro">
            Please use the links at the top of the page to get in contact with
            me. I welcome any opportunity to connnect with like-minded people so
            we can better ourselves and build a happier future.
          </p>
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
        <div className="contactPageFooter">
          <Footer />
        </div>
      </ContactPageStyles>
    </>
  );
}
