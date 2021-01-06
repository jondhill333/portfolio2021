import { Link } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import CustomButton from "./customButton";
import { AiOutlineDoubleLeft as Left } from "react-icons/ai";
import { AiOutlineDoubleRight as Right } from "react-icons/ai";

const ProjectImageDisplayStyles = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .desktopImage {
    width: 100%;
    height: 450px;
    position: absolute;
    top: 0;
  }
  .mobileImage {
    width: 200px;
    height: 400px;
    position: absolute;
    top: 0;
    transition: ease-in-out 0.5s;
  }

  .buttonContainer {
    position: absolute;
    bottom: 1%;
    width: 120px;
    font-size: 1.5rem;
  }
  .arrow {
    color: red;
    position: absolute;
    height: 30px;
  }
  .right {
    right: 1%;
  }
  .left {
    left: 1%;
  }
`;

export default function ProjectImageDisplay({ project }) {
  const [isDesktopImage, setIsDesktopImage] = useState("desktop");

  function handleClick() {
    if (isDesktopImage === "desktop") {
      setIsDesktopImage("mobile");
    } else {
      setIsDesktopImage("desktop");
    }
  }
  return (
    <>
      <ProjectImageDisplayStyles>
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
        <button onClick={handleClick} type="button" className="arrow left">
          <Left />
        </button>
        <button type="button" className=" arrow right">
          <Right />
        </button>

        {/* <div className="buttonContainer"> */}

        {/* <CustomButton onClick={handleClick}>
            <div>
              See {isDesktopImage === "desktop" ? "mobile" : "desktop"} image
            </div>
          </CustomButton> */}
      </ProjectImageDisplayStyles>
    </>
  );
}
