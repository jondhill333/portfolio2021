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

  a {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: var(--orange);
    }
  }

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
    padding-top: 40px;
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes FadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .aboutSection {
    animation-name: FadeIn;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  .helloAndWelcomeSection {
    animation-name: FadeOut;
    animation-delay: 8s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    font-size: 3rem;
    width: 100%;
    text-align: center;
  }
  .hello {
    animation-delay: 0.5s;
    animation-duration: 1.5s;
  }
  .welcome {
    animation-delay: 1.5s;
    animation-duration: 1.5s;
  }
  .two {
    animation-delay: 2.5s;
    animation-duration: 2s;
  }

  .three {
    animation-delay: 4s;
    animation-duration: 2.5s;
  }

  .four {
    animation-delay: 6s;
    animation-duration: 2.5s;
  }
  .five {
    animation-delay: 8s;
    animation-duration: 2.5s;
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
      font-size: 3rem;
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
  const profilePic = data.images.nodes.filter(
    (pic) => pic.name === "profile picture"
  );
  const profilePicFluid = profilePic[0].image.asset.fluid;
  let visited;

  React.useEffect(() => {
    const storage = window.localStorage;
    storage.setItem("alreadyVisited", true);
    visited = storage.getItem(true);
    // return visited
  });

  // window.localStorage.clear();
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
            <div>
              <div className="helloAndWelcomeSection">
                <span className="aboutSection hello">
                  Hello,{" "}
                  <span className="aboutSection welcome">and welcome.</span>{" "}
                </span>
              </div>
              <span className="aboutSection two">
                {" "}
                I’m Jon and I’m a developer.
              </span>{" "}
              <span className="aboutSection three">
                My passion is building things and getting stuck into complex
                problems.
              </span>
              <span className="aboutSection four">
                {" "}
                I love the extensive learning opportunities that a life of code
                brings.{" "}
              </span>
              <span className="aboutSection five">
                I am currently working at{" "}
                <a href="https://dodec.co.uk/" target="_blank">
                  Dodec
                </a>
                .
              </span>
            </div>
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
