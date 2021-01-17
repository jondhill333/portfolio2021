import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CustomButton from "../components/customButton";
import ProjectList from "../components/ProjectList";
import ProjectsFilter from "../components/ProjectsFilter";
import SEO from "../components/SEO";

import Footer from "../components/footer";

const ProjectPageStyles = styled.div`
  color: var(--white);
  height: 1000px;
  position: relative;
  h1 {
    font-family: "Kalam";
    margin: 2% 0 1% 10%;
    padding: 0;
  }
  .projectsPageFooter {
    position: relative;
    bottom: 0;
  }
  @media (max-width: 1000px) {
    height: 1300px;
  }
  @media (max-width: 750px) {
    height: 2100px;
    justify-content: center;
    h1 {
      font-size: 3rem;
      margin: 5% 0 2% 0%;
    }
  }
`;

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );

  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <h1>Projects</h1>
        <ProjectsFilter />
        <ProjectList projects={projects} />
      </ProjectPageStyles>
      <div className="projectsPageFooter">
        <Footer />
      </div>
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
        date
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
