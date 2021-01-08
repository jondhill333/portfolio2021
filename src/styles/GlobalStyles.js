import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --otherGrey: #212529;
    --deepBlue:  #141c3a;
    --orange: orange;
  }
  html {
      font-size: 10px;
  }
  body {
      background-color: var(--otherGrey);
      font-size: 2rem;

  }
  h1, h2, h3, h4, h5 {
    font-family: "Kalam";
  }
  h1 {
    margin: 2vh 0 3vh 0;
  }
`;

export default GlobalStyles;
