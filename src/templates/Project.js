import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";
import ProjectImageDisplay from "../components/projectImageDisplay";

const ProjectPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  color: var(--white);
  position: relative;
  font-family: "IBM Plex Mono";
  align-items: center;
  .titleContainer {
    width: 600px;
    text-align: start;
  }
  section {
    margin: 2vh 0 2vh 0;
  }
  h2 {
    font-size: 3rem;
  }

  .langAndTagsContainer {
    width: 600px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }

  .languagesContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40px;
    gap: 10px;
    padding-left: 10px;
    margin: 2vh 0 2vh 0;
  }
  .language {
    display: flex;
    flex-direction: row;
    height: 38px;
    background-color: var(--white);
    width: 120px;
    align-items: center;
    border: 1px solid var(--orange);
    border-radius: 3px;
    line-height: 1.1;
  }

  .image {
    width: 25px;
    height: 25px;
    margin: 0 0 0 3px;
    padding: 2px 0;
  }
  .name {
    color: black;
    margin: 0 0 0 4px;
    font-size: 1.4rem;
  }

  .tagsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.5rem;
    justify-items: right;
    padding-right: 10px;
  }
  .content {
    width: 600px;
    text-align: start;
  }
  .description {
  }
  .notes {
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

  return (
    <>
      <SEO
        title={project.name}
        image={project.desktopImage?.asset?.fluid?.src}
      />
      <ProjectPageStyles>
        <div className="titleContainer">
          <h1>{project.name}</h1>
        </div>
        <ProjectImageDisplay project={project} />
        <section className="langAndTagsContainer">
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
        </section>
        <section className="content description">
          <h2>Description</h2>
          <p>{project.description}</p>
        </section>
        <section className="content notes">
          <h2>Notes</h2>
          <p>{project.notes}</p>
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
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      name
      description
      githubLink
      id
      notes
      tags {
        name
        id
      }
      languages {
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
      slug {
        current
      }
      url
      desktopImage {
        asset {
          fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxHeight: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      desktopImageTwo {
        asset {
          fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
          }
          fluid(maxHeight: 400) {
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
