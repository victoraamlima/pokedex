import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonsData, getPokemonAbilities } from "../../services";
import { TypesColorsContext } from "../../contexts/pokemon-info/type-color-contexts";
import {
  StyledPokemon,
  PokemonHeader,
  PokemonImage,
  PokemonName,
  PokemonTypes,
  PokemonType,
  PokemonAbilities,
  PokemonAbilitiesTitle,
  PokemonAbility,
  PokemonAbilityName,
  PokemonAbilityText,
  PokemonMoves,
  PokemonMovesTitle,
  PokemonMove,
  MoreMoves,
  PokemonTypeName,
  PokemonId,
  PokemonTypeImage,
  Moves,
} from "./styled";
import { BackgroundCover } from "../pokemons-list/styled";
import { ThemeContext } from "../../contexts/theme-contexts";
import React, { useContext } from "react";

const Pokemon = () => {
  const [pokemonInfo, setPokemonsInfo] = useState({
    sprites: {
      front_default: "",
    },
    name: "",
    types: [],
    abilities: [{ ability: { name: "battle-armor" } }],
    moves: [],
  });

  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [quantityOfMoves, setQuantityOfMoves] = useState(10);

  const { pokemonsTypesColors } = useContext(TypesColorsContext);
  const { theme } = useContext(ThemeContext);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonsData(name);
      setPokemonsInfo(pokemonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchAbility = async () => {
      const pokemonData = await getPokemonAbilities(pokemonInfo.abilities);

      setPokemonAbilities(pokemonData);
    };
    fetchAbility();
  }, [pokemonInfo]);

  function addMoreMoves() {
    setQuantityOfMoves(quantityOfMoves + 10);
  }

  let color = [];

  return (
    <StyledPokemon color={color}>
      <BackgroundCover theme={theme} borderRadius={"0"} />
      <PokemonHeader>
        <div>
          <PokemonName>{pokemonInfo.name}</PokemonName>

          <PokemonTypes theme={theme}>
            {pokemonInfo.types.map((pokemonType, index) => {
              const type = pokemonType.type.name;

              pokemonsTypesColors.forEach((pokemonType) => {
                if (type === pokemonType.type) {
                  color.push(pokemonType.color);
                }
              });
              return (
                <PokemonType key={index}>
                  <PokemonTypeImage
                    key={type}
                    src={require(`../../images/types/${type}.png`)}
                    alt={type}
                  />
                  <PokemonTypeName theme={theme}>{type}</PokemonTypeName>
                </PokemonType>
              );
            })}
          </PokemonTypes>

          <PokemonId>#{pokemonInfo.id}</PokemonId>
        </div>

        <PokemonImage
          src={pokemonInfo.sprites.front_default}
          alt={pokemonInfo.name}
        />
      </PokemonHeader>

      <PokemonAbilities theme={theme}>
        <PokemonAbilitiesTitle theme={theme}>Abilities</PokemonAbilitiesTitle>
        {pokemonAbilities.map((x, index) => {
          return (
            <PokemonAbility key={index}>
              <PokemonAbilityName theme={theme}>
                {pokemonAbilities[index].name}
              </PokemonAbilityName>

              {pokemonAbilities[index].effect_entries.map((message, index) => {
                if (message.language.name === "en") {
                  return (
                    <PokemonAbilityText theme={theme} key={index}>
                      {message.effect}
                    </PokemonAbilityText>
                  );
                } else {
                  <PokemonAbilityText theme={theme} key={index} />;
                }
                return null;
              })}
            </PokemonAbility>
          );
        })}
      </PokemonAbilities>

      <PokemonMoves theme={theme}>
        <PokemonMovesTitle theme={theme}>Movies</PokemonMovesTitle>
        <Moves>
          {pokemonInfo.moves
            .slice(0, quantityOfMoves)
            .map((pokemonMove, index) => {
              return (
                <PokemonMove theme={theme} key={index}>{pokemonMove.move.name}</PokemonMove>
              );
            })}
        </Moves>
        <MoreMoves theme={theme} onClick={() => addMoreMoves()}>Show More Moves</MoreMoves>
      </PokemonMoves>
    </StyledPokemon>
  );
};

export { Pokemon };
