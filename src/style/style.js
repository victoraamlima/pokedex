import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Pokemon';
        src: local('Pokemon'), url(../fonts/Pokemon-Solid.ttf) format('ttf');
      }
`;

export { GlobalStyle };
