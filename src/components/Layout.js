import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import "@fontsource/kalam";
import "@fontsource/ibm-plex-mono";

const ContentStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ContentStyles>
        <Nav />
        {children}
      </ContentStyles>
    </>
  );
}
