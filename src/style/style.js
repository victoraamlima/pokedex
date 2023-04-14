import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./responsive";

const GlobalStyle = createGlobalStyle`
    html{
     height: 100vh;
     font-size: 10px;
    }

    li {
     list-style-type: none;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        height: 100%;
    }
    #root{
        height: 100%;
    }

    @media (max-width: ${breakpoints.large}px) {
        html {
          font-size: 7px;
        }
      }
    @media (max-width: ${breakpoints.medium}px) {
        html {
        //   font-size: 5px;
        }
      }
    @media (max-width: ${breakpoints.small}px) {
        html {
        //   font-size: 5px;
        }
      }

    body::-webkit-scrollbar {
        width: 15px;
        // max-width: 15px;
        // border: 0.1px solid #000;
    }

    body::-webkit-scrollbar-track {
        // background: orange;
    }
      
    body::-webkit-scrollbar-thumb {
        background-color: #FF4D03;
        // border-radius: 20px;
        // border: 3px solid orange;
    }

    @font-face {
        font-family: 'Pokemon';
        src: url('../fonts/pokemonSolidTTF.ttf') format('truetype'), url('../fonts/pokemonSolidWOFF.woff') format('woff'), ;
    }
`;

export { GlobalStyle };
