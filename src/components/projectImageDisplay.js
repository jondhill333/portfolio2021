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
  a > span {
    background-color: grey;
    color: red;
    padding: 10px;
    border-radius: 3px;
  }
`;

export default function ProjectImageDisplay({ project }) {
  return (
    <>
      <ProjectImageDisplayStyles>
        <Carousel>
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
