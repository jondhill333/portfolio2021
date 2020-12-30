import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ProjectPageStyles = styled.div``;

export default function HomePage() {
  return (
    <>
      <SEO title="Projects" />
      <ProjectPageStyles>
        <div>this is the project page</div>
      </ProjectPageStyles>
    </>
  );
}
