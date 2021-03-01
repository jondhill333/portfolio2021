import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "../components/SEO";

import Footer from "../components/footer";

const HomePageStyles = styled.div`
  width: 100%;
  height: 90%;
  margin: 0 auto;
  padding: 8% 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  section {
    display: flex;
    flex-direction: row;
    transform: translateY(-7%);
  }
  .profilePictureContainer {
    width: 40%;
    img {
      border-radius: 50%;
    }
  }

  .about {
    width: 60%;
    color: var(--white);
    padding: 0 0 0 4vw;
    line-height: 1.4;
    font-size: 3rem;
    text-align: justify;
    font-family: "Kalam";
    display: flex;
    align-items: center;
    letter-spacing: ;
  }
  .indexPageFooter {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  @media (max-width: 800px) {
    justify-content: start;
    padding: 0;

    section {
      flex-direction: column;
      align-items: center;
      transform: none;
      justify-content: start;
    }
    .profilePictureContainer {
      margin: 5% 0 2% 0;
      width: 80%;
    }
    .about {
      margin: 3% 0 4% 0;
      width: 90%;
      font-size: 2.5rem;
      padding: 0;
    }
  }

  @media (max-width: 650px) {
    .about {
      font-size: 1.9rem;
    }
  }
`;

export default function HomePage({ data }) {
  console.log(data);
  const profilePic = data.images.nodes.filter(
    (pic) => pic.name === "profile picture"
  );
  const profilePicFluid = profilePic[0].image.asset.fluid;
  console.log(profilePicFluid);
  return (
    <>
      <SEO title="Home" />
      <HomePageStyles>
        <section>
          <div className="profilePictureContainer">
            <Img
              fluid={profilePicFluid}
              alt={profilePic.name}
              className="profilePicture"
            />
          </div>
          <div className="about">
            Hi, I&#39;m Jon and I’m a developer from the UK. I mainly focus on
            the front end with a plan to go full stack in the future. I aim to
            build performant and great-looking products with clean and
            maintainable code. I like panda&#39;s, red wine and mountains
            &#46;&#46;&#46; amongst others things.
          </div>
        </section>
        <div className="indexPageFooter">
          <Footer />
        </div>
      </HomePageStyles>
    </>
  );
}

export const query = graphql`
  query ImageQuery {
    images: allSanityImages {
      nodes {
        name
        image {
          asset {
            fluid(maxHeight: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
