import * as React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
  color: white;
  font-family: "IBM Plex Mono";
  width: 100%;
  text-align: center;
  border-top: solid var(--white) 1px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  p {
    padding: 0;
    margin: 0;
  }
  span {
    color: var(--orange);
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>
        Jon Hill <span>&#169;</span> 2021
      </p>
    </FooterStyles>
  );
}
