import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  color: white;
  h1 {
    font-family: "Kalam";
  }
  p {
    font-family: "IBM Plex Mono";
  }
  a:hover {
    color: var(--yellow);
  }
`;

// markup
export default function NotFoundPage() {
  return (
    <main>
      <NotFoundPageStyles>
        <h1>Page not found</h1>
        <p>
          Sorry we couldn’t find what you were looking for.
          <br />
          <br />
          Go back to <Link to="/">home page</Link>.
        </p>
      </NotFoundPageStyles>
    </main>
  );
}
