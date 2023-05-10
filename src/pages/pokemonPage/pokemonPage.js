import { Link } from "react-router-dom"
import { Header } from "../../components/header/header"
import { Background, H1, StyledHeader } from "../../components/header/styled"
import { Pokemon } from "../../components/pokemon/pokemon"
import { HomeButton, StyledPokemonPage } from "./styled"
import { ThemeContext } from "../../contexts/theme-contexts"
import React, { useContext } from "react"
import { ThemeTogglerButton } from "../../components/theme-toggler-button/theme-toggler-button"
import { ButtonGoTop } from "../../components/button-go-top/button-go-top"

const PokemonPage = (props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <StyledPokemonPage>
      <Header>
        <StyledHeader>
          <Background theme={theme} />
          <Link to="/">
            <HomeButton>Home</HomeButton>
          </Link>
          <H1>Pokedex</H1>
          <ThemeTogglerButton />
        </StyledHeader>
      </Header>
      <Pokemon name={props.name} />
      <ButtonGoTop />
    </StyledPokemonPage>
  )
}

export { PokemonPage }
