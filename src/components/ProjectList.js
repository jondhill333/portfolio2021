import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 300px; */
  gap: 2.5rem;
  width: 100%;
  margin: 5vh auto;
`;

const SingleProjectStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .imageAndTitleDisplay {
    z-index: 1;
    display: block;
  }
  .imageAndTitleDisplay:hover {
    display: none;
  }
  .image {
    border-radius: 10px;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .image:hover {
    transition: scale(1.2);
  }

  .title {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .hoverOverlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: var(--otherGrey);
    border-radius: 10px;
    transition: ease-in-out 0.5s;
  }
  .hoverOverlay:hover {
    opacity: 1;
  }
`;

function SingleProject({ project }) {
  return (
    <>
      <SingleProjectStyles>
        <div className="imageAndTitleDisplay">
          <Img
            fluid={project.image.asset.fluid}
            alt={project.name}
            className="image"
          />
          <div className="title">
            <span>{project.name}</span>
          </div>
        </div>
        <div className="hoverOverlay">
          <p>{project.description}</p>
          <Link to={`./${project.slug.current}`}>
            <h4>Learn More</h4>
          </Link>
        </div>
        {/* <a href={project.githubLink} target="_blank" rel="noreferrer">
          Github
        </a>
        <br />
        <a href={project.url} target="_blank" rel="noreferrer">
          Live Site
        </a> */}
      </SingleProjectStyles>
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
