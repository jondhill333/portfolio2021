import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CustomButton from "../components/customButton";
import ProjectList from "../components/ProjectList";
import ProjectsFilter from "../components/ProjectsFilter";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div`
  color: var(--white);
  h1 {
    font-family: "Kalam";
    margin: 0;
    padding: 0;
  }
`;

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <h1>Projects</h1>
        <ProjectsFilter />
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
        id
        slug {
          current
        }
        url
        desktopImage {
          asset {
            fixed(width: 325, height: 220) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 600) {
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
  }
`;
