import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const HomePageStyles = styled.div`
  color: red;
`;

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HomePageStyles>
        <div>Hello</div>
      </HomePageStyles>
    </Layout>
  );
}
