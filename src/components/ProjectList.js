import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  width: 80%;
  margin: 0 auto;
`;

function SingleProject({ project }) {
  return (
    <>
      <div>
        <Link to={`./${project.slug.current}`}>
          <h2>{project.name}</h2>
        </Link>
        <Img fluid={project.image.asset.fluid} alt={project.name} />
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          Github
        </a>
        <br />
        <a href={project.url} target="_blank" rel="noreferrer">
          Live Site
        </a>
      </div>
    </>
  );
}

export default function ProjectList({ projects }) {
  return (
    <>
      <ProjectGridStyles>
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </ProjectGridStyles>
    </>
  );
}
