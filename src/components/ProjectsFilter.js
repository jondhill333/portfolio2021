import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ProjectFilterStyles = styled.div`
  .languagesGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 60%;
    margin: 0 auto;
  }
  .language {
    width: 120px;
    height: 40px;
    background-color: white;
    border: solid red 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0.5rem;
    border-radius: 5px;
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
    font-size: 1.5rem;
    padding: 0 0 0 0.5rem;
    color: black;
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
        <Link to="/projects">
          <span className="name">All</span>
          <span className="count">{projects.nodes.length}</span>
        </Link>
        <div className="languagesGrid">
          {languages.nodes.map((language) => (
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
          ))}
        </div>
      </ProjectFilterStyles>
    </>
  );
}
