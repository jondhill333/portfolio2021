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
      background-color: var(--otherGrey);
      /* opacity: 0.7; */
      font-size: 10px;
  }
  body {
    font-size: 2rem;
  }
  h1, h2, h3, h4, h5 {
    font-family: "Kalam";
  }
`;

export default GlobalStyles;
