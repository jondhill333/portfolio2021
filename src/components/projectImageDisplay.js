import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const ProjectImageDisplayStyles = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  display: flex;
  .carousel {
    width: 100%;
  }
  .mobileImageContainer {
    width: 600px;
    height: 400px;
    display: flex;
    align-items: center;
  }

  .mobileImage {
    left: 33.5%;
    width: 200px;
  }
  a > span {
    background-color: grey;
    color: red;
    padding: 10px;
    border-radius: 3px;
  }
  @media (max-width: 600px) {
    width: 400px;
    height: 400px;
    .mobileImage {
      left: 8%;
    }
  }
  @media (max-width: 400px) {
    width: 300px;
    height: 400px;
  }
`;

export default function ProjectImageDisplay({ project }) {
  return (
    <>
      <ProjectImageDisplayStyles>
        <Carousel className="carousel">
          <Carousel.Item>
            <Img fixed={project.desktopImage.asset.fixed} alt={project.name} />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={project.desktopImageTwo.asset.fixed}
              alt={project.name}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fixed={project.desktopImageThree.asset.fixed}
              alt={project.name}
            />
          </Carousel.Item>
          <Carousel.Item>
            <div className="mobileImageContainer">
              <Img
                className="mobileImage"
                fluid={project.mobileImage.asset.fluid}
                alt={project.name}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </ProjectImageDisplayStyles>
    </>
  );
}
