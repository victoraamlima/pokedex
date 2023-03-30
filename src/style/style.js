import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body::-webkit-scrollbar {
        // width: 17px;
        width: 3vw;
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
        src: local('Pokemon'), url('../fonts/pokemon-solid.ttf') format('ttf'), url('../fonts/pokemon-solid.woff') format('woff'), ;
    }

     
    
   
`;

export { GlobalStyle };
