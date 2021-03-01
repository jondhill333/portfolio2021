import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";
import Footer from "../components/footer";

const ProjectPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  color: var(--white);
  position: relative;
  font-family: "IBM Plex Mono";

  section {
    margin: 40px 0;
  }

  .titleContainer {
    margin: 30px 0 0 0;
    h1 {
      margin: 0;
    }
  }
  h2 {
    font-size: 3.2rem;
  }
  .introduction {
    width: 80%;
    font-size: 1.8rem;
  }
  .particularSectionContainer {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 180px;
  }
  .particularsContainer {
    width: 100%;
  }

  .particularsHeader {
    width: fit-content;
    border-bottom: 2px var(--white) solid;
    font-size: 1.8rem;
  }

  .particularsItem {
    font-size: 1.6rem;
    padding: 15px 0 0 0;
  }

  .imageContainer .hero {
    width: 100%;
    height: 700px;
  }
  .image {
    border-radius: 10px;
  }
  .purpose {
    width: 60%;
  }

  .spotlight {
    width: 60%;
    position: relative;
    left: 40%;
  }
  .lowerImageContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 400px;
  }
  .mobileImage {
    width: 45%;
    height: 600px;
    transform: translateY(-200px);
  }

  .imageThree {
    width: 60%;
    height: 400px;
  }
  .lessons {
    width: 80%;
    margin: 40px auto;
    text-align: center;
  }

  .link {
    cursor: pointer;
    color: var(--orange);
    display: inline-block;
    text-decoration: none;
  }

  .link::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: var(--orange);
    transition: width 0.3s;
  }
  .link:hover:after {
    width: 100%;
  }

  @media (max-width: 400px) {
    overflow-x: hidden;
    align-items: center;
    .titleContainer {
      margin: 25px 0;
      h1 {
        margin: 0;
        font-size: 2.8rem;
      }
    }
    h2 {
      font-size: 2.3rem;
    }
    .section {
      font-size: 1.5rem;
      text-align: justify;
      width: 100%;
      margin: 10px 0;
    }
    .particularSectionContainer {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 15px;
      margin-bottom: 25px;
    }
    .particularsHeader {
      font-size: 1.5rem;
    }
    .particularsItem {
      font-size: 1.3rem;
    }

    .spotlight {
      position: relative;
      left: 0%;
    }
    .mobileImage {
      width: 90%;
      height: 600px;
      transform: none;
    }
    .imageContainer {
      width: 100%;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .imageOne {
      margin: 0;
    }
    .image {
      width: 100%;
      margin: 10px 0;
      border-radius: 2px;
    }
    .lowerImageContainer {
      flex-direction: column;
      justify-content: center;
      height: 220px;
    }

    .mobileImageContainer {
      display: none;
    }
    .imageThree {
      width: 100%;
      height: 220px;
    }
  }
`;

export default function SingleProjectPage({ data }) {
  const { project } = data;
  console.log(project);

  return (
    <>
      <SEO
        title={project.name}
        image={project.desktopImage?.asset?.fluid?.src}
      />
      <ProjectPageStyles>
        <section className="titleContainer">
          <h1>{project.name}</h1>
        </section>
        <section className=" section introduction">
          <h2>Introduction</h2>
          <p>{project.introduction}</p>
        </section>
        <section className="section particularSectionContainer">
          <div className="particularsContainer">
            <div className="particularsHeader">TYPE</div>
            <div className="particularsItem">{project.projectType}</div>
          </div>
          <div className="particularsContainer">
            <div className="particularsHeader">STACK</div>
            <div className="particularsItem">
              {project.techStack.map((tech) => (
                <div>{tech.name}</div>
              ))}
            </div>
          </div>
          <div className="particularsContainer">
            <div className="particularsHeader">CODE</div>
            <div className="particularsItem">
              <a className="link" href={project.githubLink}>
                Repository
              </a>
            </div>
          </div>
          <div className="particularsContainer">
            <div className="particularsHeader">SITE</div>
            <div className="particularsItem">
              <a className="link" href={project.url}>
                View Site
              </a>
            </div>
          </div>
        </section>
        <div className="imageContainer hero">
          <Img
            className="image imageOne"
            fluid={project.desktopImage.asset.fluid}
          />
        </div>
        <section className="section purpose">
          <h2>Purpose and Goals</h2>
          <p>{project.purpose}</p>
        </section>
        <section className="section spotlight">
          <h2>Spotlight</h2>
          <p>{project.spotlight}</p>
        </section>
        {/* <div> */}
        <div className="section lowerImageContainer">
          <div className="mobileImageContainer">
            <Img
              className="image mobileImage"
              fixed={project.mobileImage.asset.fixed}
            />
          </div>
          <Img
            className="image imageThree"
            fluid={project.desktopImageTwo.asset.fluid}
          />
        </div>
        <section className=" section lessons">
          <h2>Lessons Learned</h2>
          <p>{project.lessons}</p>
        </section>
      </ProjectPageStyles>
      <div className="projectPageFooter">
        <Footer />
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      name
      introduction
      purpose
      spotlight
      lessons
      githubLink
      id
      projectType
      slug {
        current
      }
      url
      techStack {
        id
        name
        image {
          asset {
            fluid(maxHeight: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      desktopImage {
        asset {
          fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxHeight: 440) {
            ...GatsbySanityImageFluid
          }
        }
      }
      desktopImageTwo {
        asset {
          fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxHeight: 480) {
            ...GatsbySanityImageFluid
          }
        }
      }
      desktopImageThree {
        asset {
          fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxHeight: 480) {
            ...GatsbySanityImageFluid
          }
        }
      }
      mobileImage {
        asset {
          fixed(width: 275, height: 600) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
