import styled from "styled-components";

const HomeButton = styled.span`
  position: absolute;
  left: 10px;
  font-weight: 900;
  font-size: 24px;
  color: #ffffff;
  // overflow-x: hidden;
  width: 75px;
  // height: 100vh;
  text-align: center;


  &:hover {
    -webkit-text-shadow: 0px 0px 3px #ffffff;
    -moz-text-shadow: 0px 0px 3px #ffffff;
    text-shadow: 0px 0px 3px #ffffff;
  }
`;

const StyledPokemonPage = styled.section`
  min-height: 100vh;
  // height: 100%;
  // overflow: hidden;
  // overflow-x: hidden;
  position: relative;
`;

export { HomeButton, StyledPokemonPage };
