import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";
import ProjectImageDisplay from "../components/projectImageDisplay";
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
  .particularsContainer {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 25% 75%;
    height: 180px;
  }
  .particularsHeaderContainer {
    width: 100%;
  }

  .particularsHeader {
    width: fit-content;
    border-bottom: 2px var(--white) solid;
    font-size: 1.8rem;
  }

  .particularsItem {
    font-size: 1.6rem;
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
    /* height: 800px; */
  }
  .mobileImage {
    width: 45%;
    height: 600px;
    transform: translateY(-200px);
  }

  .imageThree {
    width: 45%;
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

  @media (max-width: 1250px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    .titleContainer {
      width: 400px;
      text-align: start;
    }
    .langAndTagsContainer {
      width: 400px;
    }
    .language {
      height: 28px;
      width: 100px;
    }
    .tagsContainer {
      grid-template-columns: 1fr;
    }
    .image {
      width: 20px;
      height: 20px;
      margin: 0 0 0 2px;
      padding: 1px 0;
    }
    .name {
      margin: 0 0 0 2px;
      font-size: 1.1rem;
    }
    .content {
      width: 400px;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.4rem;
    }
    .projectLinks {
      width: 400px;
    }
  }
  @media (max-width: 400px) {
    .titleContainer {
      width: 300px;
      text-align: start;
    }
    .langAndTagsContainer {
      width: 300px;
    }
    .language {
      height: 25px;
      width: 90px;
    }
    .name {
      margin: 0 0 0 2px;
      font-size: 1rem;
    }
    .tagsContainer {
      font-size: 1.2rem;
      padding-right: 0;
    }
    .content {
      width: 300px;
    }
    .projectLinks {
      width: 300px;
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
        <section className="introduction">
          <h2>Introduction</h2>
          <p>{project.introduction}</p>
        </section>
        <section className="particularsContainer">
          <div className="particularsHeaderContainer">
            <div className="particularsHeader">TYPE</div>
          </div>
          <div className="particularsHeaderContainer">
            <div className="particularsHeader">STACK</div>
          </div>
          <div className="particularsHeaderContainer">
            <div className="particularsHeader">CODE</div>
          </div>
          <div className="particularsHeaderContainer">
            <div className="particularsHeader">SITE</div>
          </div>
          <div className="particularsItem">{project.projectType}</div>
          <div className="particularsItem">
            {project.techStack.map((tech) => (
              <div>{tech.name}</div>
            ))}
          </div>
          <div className="particularsItem">
            <a className="link" href={project.githubLink}>
              Repository
            </a>
          </div>
          <div className="particularsItem">
            <a className="link" href={project.url}>
              View Site
            </a>
          </div>
        </section>
        <div className="imageContainer hero">
          <Img
            className="image imageOne"
            fluid={project.desktopImage.asset.fluid}
          />
        </div>
        <section className="purpose">
          <h2>Purpose and Goals</h2>
          <p>{project.purpose}</p>
        </section>
        <section className="spotlight">
          <h2>Spotlight</h2>
          <p>{project.spotlight}</p>
        </section>
        {/* <div> */}
        <div className="lowerImageContainer">
          <Img
            className="image mobileImage"
            fixed={project.mobileImage.asset.fixed}
          />
          <Img
            className="image imageThree"
            fluid={project.desktopImageTwo.asset.fluid}
          />
        </div>
        {/* </div> */}
        <section className="lessons">
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
