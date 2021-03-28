import {createGlobalStyle} from 'styled-components';
import {reset} from 'styled-reset';

// 외부에서 import 할거니까 모듈 내보내자~!
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    &:focus, &:active {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Maven Pro', sans-serif;
  }

  #root{
    height: 100%;
  }
`;

export default GlobalStyle;
