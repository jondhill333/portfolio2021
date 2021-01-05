import { graphql } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/SEO";
import CustomButton from "../components/customButton";

const ProjectPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  color: var(--white);
  position: relative;

  .desktopImage {
    width: 650px;
    height: 450px;
  }
  .mobileImage {
    width: 200px;
    height: 400px;
    position: absolute;
    top: 5%;
    left: 30%;
    transition: ease-in-out 0.5s;
  }

  .buttonContainer {
    position: absolute;
  }

  .image {
    width: 25px;
    height: 25px;
  }
`;

export default function SingleProjectPage({ data }) {
  const [isDesktopImage, setIsDesktopImage] = useState("desktop");

  function handleClick() {
    console.log("clicked");
    console.log(isDesktopImage);
    if (isDesktopImage === "desktop") {
      setIsDesktopImage("mobile");
    } else {
      setIsDesktopImage("desktop");
    }
  }

  const { project } = data;
  return (
    <>
      <SEO
        title={project.name}
        image={project.desktopImage?.asset?.fluid?.src}
      />
      <ProjectPageStyles>
        <div>
          <h2>{project.name}</h2>
        </div>
        {isDesktopImage === "desktop" && (
          <div className="desktopImage">
            <Img fluid={project.desktopImage.asset.fluid} alt={project.name} />
          </div>
        )}
        {isDesktopImage === "mobile" && (
          <div className="mobileImage">
            <Img
              fluid={project.mobileImage ? project.mobileImage.asset.fluid : ""}
              alt={project.name}
            />
          </div>
        )}
        <div className="buttonContainer">
          <CustomButton onClick={handleClick}>
            See {isDesktopImage === "desktop" ? "mobile" : "desktop"} image
          </CustomButton>
        </div>
        {project.languages.map((language) => (
          <div className="button" key={language.id}>
            <Img
              fluid={language.image.asset.fluid}
              alt={language.name}
              className="image"
            />
            <div className="name">{language.name}</div>
          </div>
        ))}
        {project.tags.map((tag) => (
          <div className="tag" key={tag.id}>
            <span className="hashtag">#</span>
            <span className="tagName">{tag.name}</span>
          </div>
        ))}
        <div>{project.description}</div>
        <div>{project.notes}</div>
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          Github
        </a>
        <br />
        <a href={project.url} target="_blank" rel="noreferrer">
          Live Site
        </a>
      </ProjectPageStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      name
      description
      githubLink
      id
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
`;
