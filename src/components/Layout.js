import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import "normalize.css";

// import GlobalStyles from "../styles/GlobalStyles";
// import Typography from "../styles/Typography";
// import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles> */}
      <Nav />
      {children}
      {/* <Footer />
        </ContentStyles>
      </SiteBorderStyles> */}
    </>
  );
}
