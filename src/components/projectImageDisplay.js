import { Link } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import CustomButton from "./customButton";
import { AiOutlineDoubleLeft as Left } from "react-icons/ai";
import { AiOutlineDoubleRight as Right } from "react-icons/ai";

const ProjectImageDisplayStyles = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .desktopImage {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    transition: ease-in-out 0.5s;
    /* transform: translateX(400px); */
  }
  .mobileImage {
    width: 175px;
    height: 400px;
    position: absolute;
    top: 0;
    transition: ease-in-out 0.5s;
  }
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 2.5s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  .arrow {
    color: var(--orange);
    position: absolute;
    background-color: grey;
    opacity: 0.5;
    border: none;
    padding: 0;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
  }
  .right {
    right: 0;
    bottom: 48%;
  }
  .left {
    left: 0;
    bottom: 48%;
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
          <div className="desktopImage fade">
            <Img fluid={project.desktopImage.asset.fluid} alt={project.name} />
          </div>
        )}
        {isDesktopImage === "mobile" && (
          <div className="mobileImage fade">
            <Img
              fluid={project.mobileImage ? project.mobileImage.asset.fluid : ""}
              alt={project.name}
            />
          </div>
        )}
        <button onClick={handleClick} type="button" className="arrow left">
          <Left />
        </button>
        <button onClick={handleClick} type="button" className=" arrow right">
          <Right />
        </button>
      </ProjectImageDisplayStyles>
    </>
  );
}
