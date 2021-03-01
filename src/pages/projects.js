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
  height: 1350px;
  position: relative;
  h1 {
    font-family: "Kalam";
    margin: 3% 0 1% 0%;
    padding: 0;
  }
  p {
    font-family: "IBM Plex Mono";
  }
  .projectsPageFooter {
    position: relative;
    bottom: 0;
  }
  @media (max-width: 1000px) {
    height: 2000px;
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 3.5rem;
      margin: 5% 0 2% 0%;
    }
  }
`;

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 3);
  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <h1>Projects</h1>
        <p>Please see a selection of my most recent work.</p>
        <ProjectList projects={projects} />
      </ProjectPageStyles>
      <div className="projectsPageFooter">
        <Footer />
      </div>
    </>
  );
}

export const query = graphql`
  query ProjectsQuery {
    projects: allSanityProjects {
      nodes {
        name
        description
        introduction
        githubLink
        purpose
        date
        spotlight
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
        id
        slug {
          current
        }
        url
        desktopImage {
          asset {
            fixed(width: 480, height: 320) {
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
