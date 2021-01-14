import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import CustomButton from "./customButton";

const ProjectFilterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 80%;
  margin: 0 auto;
  justify-items: center;

  h3 {
    grid-column: 1 / -1;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .language {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "IBM Plex Mono";
  }
  .image {
    width: 25px;
    height: 25px;
    margin: 0 0 0 0.5rem;
  }
  a {
    text-decoration: none;
  }
  .name {
    font-size: 1.4rem;
    padding: 0 0 0 0.5rem;
    color: black;
  }
  [aria-current] {
    background-color: var(--orange);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    margin: 0 0;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 100%;
    h3 {
      font-size: 1.5rem;
    }
    .image {
      width: 20px;
      height: 20px;
      margin: 0 0 0 0.3rem;
    }
    .name {
      font-size: 1.1rem;
      padding: 0 0 0 0.3rem;
    }
  }
`;

export default function ProjectsFilter() {
  const { languages, projects } = useStaticQuery(graphql`
    query {
      languages: allSanityLanguage {
        nodes {
          image {
            asset {
              fluid(maxWidth: 100) {
                ...GatsbySanityImageFluid
              }
            }
          }
          name
          id
        }
      }
      projects: allSanityProjects {
        nodes {
          languages {
            name
            id
          }
        }
      }
    }
  `);

  return (
    <>
      <ProjectFilterStyles>
        <h3>Click on a button to filter the grid!</h3>
        <CustomButton>
          <Link to="/projects" className="language">
            <div className="name">All</div>
          </Link>
        </CustomButton>
        {languages.nodes.map((language) => (
          <CustomButton key={language.id}>
            <Link
              to={`/language/${language.name}`}
              className="language"
              key={language.id}
            >
              <Img
                fluid={language.image.asset.fluid}
                alt={language.name}
                className="image"
              />
              <div className="name">{language.name}</div>
            </Link>
          </CustomButton>
        ))}
      </ProjectFilterStyles>
    </>
  );
}
