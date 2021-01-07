import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const ProjectImageDisplayStyles = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  .mobileImage {
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 38%;
  }
`;

export default function ProjectImageDisplay({ project }) {
  return (
    <>
      <ProjectImageDisplayStyles>
        <Carousel>
          <Carousel.Item>
            <Img fluid={project.desktopImage.asset.fluid} alt={project.name} />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={project.desktopImageTwo.asset.fluid}
              alt={project.name}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={project.desktopImageThree.asset.fluid}
              alt={project.name}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              className="mobileImage"
              fixed={project.mobileImage.asset.fixed}
              alt={project.name}
            />
          </Carousel.Item>
        </Carousel>
      </ProjectImageDisplayStyles>
    </>
  );
}
