import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Abril Fontface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: black;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: white;
    margin:0;
  }

  h1, 
  h2 {
    position: relative;
    font-family: 'Abril Fatface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    color: white;
    z-index: 1;
    white-space: nowrap;
  }
`;
