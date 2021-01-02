import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ProjectFilterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
  justify-items: center;
  .button {
    width: 110px;
    height: 35px;
    background-color: white;
    border: solid red 1px;
    border-radius: 5px;
  }

  .language {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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
        <div className="button">
          <Link to="/projects" className="language">
            <div className="name">All</div>
          </Link>
        </div>
        {languages.nodes.map((language) => (
          <div className="button">
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
          </div>
        ))}
      </ProjectFilterStyles>
    </>
  );
}
