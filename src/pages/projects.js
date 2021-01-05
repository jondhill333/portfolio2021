import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CustomButton from "../components/customButon";
import ProjectList from "../components/ProjectList";
import ProjectsFilter from "../components/ProjectsFilter";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div`
  color: var(--white);
`;

export default function ProjectsPage({ data, pageContext }) {
  const projects = data.projects.nodes;
  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <ProjectsFilter activeLanguage={pageContext.language} />
        <CustomButton />
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
  }
`;
