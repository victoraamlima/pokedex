import styled from "styled-components"

const HomeButton = styled.span`
  position: absolute;
  display: flex;
  left: 10px;
  bottom: 20px;
  font-weight: 900;
  font-size: 24px;
  color: #ffffff;
  width: 75px;
  text-align: center;

  &:hover {
    -webkit-text-shadow: 0px 0px 3px #ffffff;
    -moz-text-shadow: 0px 0px 3px #ffffff;
    text-shadow: 0px 0px 3px #ffffff;
  }
`

const StyledPokemonPage = styled.section`
  min-height: 100vh;
  position: relative;
`

export { HomeButton, StyledPokemonPage }
