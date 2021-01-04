import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  color: var(--white);

  .projectImage {
    width: 600px;
    height: 400px;
  }
  .image {
    width: 25px;
    height: 25px;
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
        <div>
          <h2>{project.name}</h2>
        </div>
        <Img
          fluid={project.desktopImage.asset.fluid}
          alt={project.name}
          className="projectImage"
        />
        {project.languages.map((language) => (
          <div className="button">
            <Img
              fluid={language.image.asset.fluid}
              alt={language.name}
              className="image"
            />
            <div className="name">{language.name}</div>
          </div>
        ))}
        <div>{project.description}</div>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          Github
        </a>
        <br />
        <a href={project.url} target="_blank" rel="noreferrer">
          Live Site
        </a>
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
          fixed(width: 800, height: 250) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      mobileImage {
        asset {
          fixed(width: 800, height: 250) {
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
