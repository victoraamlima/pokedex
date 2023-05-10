import { PokemonList } from "../../components/pokemons-list/pokemons-list"
import { Header } from "../../components/header/header"
import { Form } from "../../components/form/form"
import { Section } from "./styled"
import { useState } from "react"
import { StyledHeader, H1, Background } from "../../components/header/styled"
import { ThemeTogglerButton } from "../../components/theme-toggler-button/theme-toggler-button"
import { ThemeContext } from "../../contexts/theme-contexts"
import React, { useContext } from "react"
import { ButtonGoTop } from "../../components/button-go-top/button-go-top"

const Home = () => {
  const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ]

  const { theme } = useContext(ThemeContext)
  const [selectedTypes, setSelectedTypes] = useState(new Set())

  return (
    <Section theme={theme}>
      <Header>
        <StyledHeader>
          <Background theme={theme} />
          <Form
            types={types}
            selectedTypes={selectedTypes}
            onSelectedTypesChange={setSelectedTypes}
          />
          <H1>Pokedex</H1>
          <ThemeTogglerButton />
        </StyledHeader>
      </Header>
      <PokemonList types={types} selectedTypes={selectedTypes} />
      <ButtonGoTop />
    </Section>
  )
}

export { Home }
