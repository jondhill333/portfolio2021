import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const NavStyles = styled.div`
  width: 100%;
  height: 20vh;
  margin: 0 auto;
`;
const NavGrid = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: 20% 60% 20%;

  .pageLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <NavGrid>
        <div className="logo">Jon Hill</div>
        <div className="pageLinks">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="contactLinks">a</div>
      </NavGrid>
    </NavStyles>
  );
}
