import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
      ${reset}
    * {
      margin: 0;
      padding: 0;
      border: none;
      color:black;
      background: #1C1D28;
    }
    a {
      text-decoration: none;
    }
    body {
      overflow:hidden;
    }
`;

export default GlobalStyle;
