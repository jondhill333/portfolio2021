import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import CustomButton from "./customButton";

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  width: 100%;
  margin: 5vh auto;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 325px);
  }
  @media (max-width: 750px) {
    grid-template-columns: 325px;
    justify-items: center;
  }
`;

const SingleProjectStyles = styled.div`
  display: flex;
  flex-direction: column;

  .link {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  .item {
    margin: 10px 0;
  }

  .image {
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }

  :hover .image {
    transform: scale(1.02);
  }

  .title {
    font-family: "Kalam";
    margin-top: 10px;
    font-size: 3rem;
  }

  .projectDescription {
    font-family: "IBM Plex Mono";
  }
  .projectPageLink {
    color: var(--orange);
    display: inline-block;
    text-decoration: none;
    width: fit-content;
    font-family: "IBM Plex Mono";
  }

  .projectPageLink::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: var(--orange);
    transition: width 0.3s;
  }
  :hover .projectPageLink:after {
    width: 100%;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

function SingleProject({ project }) {
  return (
    <>
      <SingleProjectStyles>
        <Link className="link" href={`/projects/${project.slug.current}`}>
          <Img
            fixed={project.desktopImage.asset.fixed}
            alt={project.name}
            className=" item image"
          />
          <h3 className="item title">{project.name}</h3>
          <p className="item projectDescription">{project.description}</p>
          <div className="item projectPageLink"> Learn More</div>
        </Link>
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
