import * as React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import CV from "../assets/Jonathan_Hill_CV_WD.pdf";

const ContactPageStyles = styled.div`
  width: 60%;
  margin: 4vh auto;
  display: flex;
  flex-direction: column;
  font-family: "IBM Plex Mono";
  color: var(--white);
  h1 {
    /* margin: 0; */
  }
  section {
    margin-bottom: 4vh;
  }
  a {
    /* color: blue; */
    &:hover {
      color: var(--orange);
    }
  }

  .intro {
  }
  .resume {
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
            welcome any oppurtunity to connnect with like-minded people so we
            can better ourselves and build a happier future.
          </p>
        </section>
        <section>
          <p className="resume">
            For perspectove employers - please a downloadable version of my
            current resume/CV is avaiable{" "}
            <a href={CV} download>
              here
            </a>
            .
          </p>
        </section>
      </ContactPageStyles>
    </>
  );
}
