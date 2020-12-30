import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div`
  color: white;
`;

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <ProjectList projects={projects} />
      </ProjectPageStyles>
    </>
  );
}

export const query = graphql`
  query ProjectsQuery {
    projects: allSanityProjects {
      nodes {
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
            fixed(width: 330, height: 250) {
              ...GatsbySanityImageFixed
            }
            fluid(maxHeight: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
