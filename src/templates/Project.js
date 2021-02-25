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
  /* align-items: center; */

  section {
    margin: 40px 0;
  }

  .titleContainer {
    h1 {
      margin: 0;
    }
  }
  .introduction {
    width: 80%;
    font-size: 1.8rem;
  }
  .particularsContainer {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 30% 70%;
    /* align-items: center;*/
    height: 200px;
  }

  .particularsHeader {
  }

  .particularsItem {
  }

  .imageContainer .hero {
    width: 100%;
    height: 600px;
  }
  .imageOne {
    border-radius: 10px;
  }
  .projectLinks {
    width: 600px;
    margin: 2vh 0 2vh 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  a {
    color: var(--white);
    cursor: pointer;
    &:hover {
      color: var(--orange);
    }
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
          <div className="particularsHeader">Type</div>
          <div className="particularsHeader">Stack</div>
          <div className="particularsHeader">Code</div>
          <div className="particularsHeader">Site</div>
          <div className="particularsItem">{project.projectType}</div>
          <div className="particularsItem">
            {project.techStack.map((tech) => (
              <div>{tech.name}</div>
            ))}
          </div>
          <div className="particularsItem">
            <a href={project.githubLink}>Repository</a>
          </div>
          <div className="particularsItem">
            <a href={project.url}>View Site</a>
          </div>
        </section>
        <div className="imageContainer hero">
          <Img className="imageOne" fluid={project.desktopImage.asset.fluid} />
        </div>
        <section className="purpose">
          <h2>Purpose and Goals</h2>
          <p>{project.purpose}</p>
        </section>
        <section className="spotlight">
          <h2>Spotlight</h2>
          <p>{project.spotlight}</p>
        </section>
        <section className="lessons">
          <h2>Lessons Learned</h2>
          <p>{project.lessons}</p>
        </section>
        <section className="projectLinks">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            Github Repo
          </a>
          <br />
          <a href={project.url} target="_blank" rel="noreferrer">
            Live Site
          </a>
        </section>
      </ProjectPageStyles>
      <div className="projectPageFooter">
        <Footer />
      </div>
    </>
  );
}

{
  /* <ProjectImageDisplay project={project} /> */
}
{
  /* <section className="langAndTagsContainer">
          <div className="languagesContainer">
            {project.languages.map((language) => (
              <div className="language" key={language.id}>
                <Img
                  fluid={language.image.asset.fluid}
                  alt={language.name}
                  className="image"
                />
                <div className="name">{language.name}</div>
              </div>
            ))}
          </div>
          <div className="tagsContainer">
            {project.tags.map((tag) => (
              <div className="tag" key={tag.id}>
                <span className="hashtag">#</span>
                <span className="tagName">{tag.name}</span>
              </div>
            ))}
          </div>
        </section> */
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
          fluid(maxHeight: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      desktopImageThree {
        asset {
          fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxHeight: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      mobileImage {
        asset {
          fixed(width: 275, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
