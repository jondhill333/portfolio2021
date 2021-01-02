import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import ProjectsFilter from "../components/ProjectsFilter";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div`
  color: white;
`;

export default function ProjectsPage({ data, pageContext }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <ProjectsFilter activeLanguage={pageContext.language} />
        <ProjectList projects={projects} />
      </ProjectPageStyles>
    </>
  );
}

export const query = graphql`
  query ProjectsQuery($languageRegex: String) {
    projects: allSanityProjects(
      filter: { languages: { elemMatch: { name: { regex: $languageRegex } } } }
    ) {
      nodes {
        name
        description
        githubLink
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
