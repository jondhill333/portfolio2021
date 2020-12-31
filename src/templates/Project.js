import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div`
  color: red;
`;

export default function SingleProjectPage({ data }) {
  const { project } = data;
  return (
    <>
      <SEO title={project.name} image={project.image?.asset?.fluid?.src} />
      <ProjectPageStyles>
        <Img fluid={project.image.asset.fluid} alt={project.name} />
        <div>
          <h2>{project.name}</h2>
        </div>
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
      slug {
        current
      }
      url
      image {
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
