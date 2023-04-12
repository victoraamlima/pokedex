import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Background, H1, StyledHeader } from "../../components/header/styled";
import { Pokemon } from "../../components/pokemon/pokemon";
import { HomeButton, StyledPokemonPage } from "./styled";
import { ThemeContext } from "../../contexts/theme-contexts";
import React, { useContext, useState } from "react";
import { ThemeTogglerButton } from "../../components/theme-toggler-button/theme-toggler-button";
import { TypesColorsContext } from "../../contexts/pokemon-info/type-color-contexts";

const PokemonPage = (props) => {
  const { theme } = useContext(ThemeContext);
  const { pokemonsTypesColors } = useContext(TypesColorsContext);

  return (
    <StyledPokemonPage>
      <Header>
        <StyledHeader>
          <Background theme={theme} />
          <Link to="/pokemons">
            <HomeButton>Home</HomeButton>
          </Link>
          <H1 className="app">Pokedex</H1>
          <ThemeTogglerButton />
        </StyledHeader>
      </Header>
      <Pokemon name={props.name} />
    </StyledPokemonPage>
  );
};

export { PokemonPage };
