import React from "react";
import styled from "styled-components";

const CustomButtonStyles = styled.button`
    width: 100%;
    height: 35px;
    background-color: var(--white);
    border: solid var(--orange) 1px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    opacity: 0.8;
    padding: 0;

  }
  &:hover {
    background-color: var(--orange);
  }

`;

export default function CustomButton({ children, onClick }) {
  return (
    <>
      <CustomButtonStyles onClick={onClick}>{children}</CustomButtonStyles>
    </>
  );
}
