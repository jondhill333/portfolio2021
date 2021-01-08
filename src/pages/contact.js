import * as React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import CV from "../assets/Jonathan_Hill_CV_WD.pdf";

import Footer from "../components/Footer";

const ContactPageStyles = styled.div`
  width: 60%;
  margin: 4vh auto;
  display: flex;
  flex-direction: column;
  font-family: "IBM Plex Mono";
  color: var(--white);
  section {
    margin-bottom: 4vh;
  }
  a {
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
`;

export default function ContactPage() {
  return (
    <>
      <SEO title="Home" />
      <ContactPageStyles>
        <section>
          <h1 className="pageTitle">Contact</h1>
          <p className="intro">
            I am interested in paid work, volunteer work, open source,
            contract/freelance or simply connecting for study purposes. Please
            use the links at the top of the page to get in contact with me. I
            welcome any opportunity to connnect with like-minded people so we
            can better ourselves and build a happier future.
          </p>
        </section>
        <section>
          <p className="resume">
            For perspective employers (or if you’re just a curious soul) please
            find a downloadable version of my current resume/CV{" "}
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
