import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import "@fontsource/kalam";
import "@fontsource/ibm-plex-mono";

// import Typography from "../styles/Typography";
// import Footer from "./Footer";

const ContentStyles = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ContentStyles>
        {/* <Typography /> */}
        {/* <SiteBorderStyles> */}
        {/* <ContentStyles>  */}
        <Nav />
        {children}
        {/* <Footer /> */}
        {/* </ContentStyles> */}
        {/* </SiteBorderStyles> */}
      </ContentStyles>
    </>
  );
}
