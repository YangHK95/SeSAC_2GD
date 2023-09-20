import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'IAMAPLAYER';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/IAMAPLAYER.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GangwonState';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/GangwonState.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
*{
  font-family: 'IAMAPLAYER','GangwonState';
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

a{
  text-decoration: none;
}

ul,ol{
  list-style: none;
}


`;
export default GlobalStyle;
