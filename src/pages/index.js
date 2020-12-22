import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const HomePageStyles = styled.div`
  color: red;
`;

export default function HomePage() {
  return (
    <Layout>
      <HomePageStyles>
        <div>Hello</div>
      </HomePageStyles>
    </Layout>
  );
}
