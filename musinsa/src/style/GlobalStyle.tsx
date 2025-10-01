import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
                 Roboto, "Helvetica Neue", Arial, "Apple SD Gothic Neo",
                 "Noto Sans KR", "Malgun Gothic", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
  }

  * {
    box-sizing: border-box;
  }
}`;

export default GlobalStyle;