import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    scroll-behavior: smooth;

  }
  html, body {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    background-color: #efe9e5;
    color: #56504c
  }

  html.noOverflow {d
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-weight: 300;
  }

  ::selection {
    background: #018cb7;
    color: #fff;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
  }

  .main-content {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1280px) {
      margin-top: 14px;
    }
  }

`
