import { Link } from "react-router-dom"
import { getPokemonList } from "../../services"
import { useEffect, useState } from "react"
import { ButtonMorePokemons } from "./button-more-pokemons/button-more-pokemons"
import { ThemeContext } from "../../contexts/theme-contexts"
import React, { useContext } from "react"
import { TypesColorsContext } from "../../contexts/pokemon-info/type-color-contexts"
import {
  PokemonListContainer,
  PokemonCard,
  StyledLink,
  CardInfo,
  TypeImg,
  PokemonImg,
  TypesContainer,
  PokemonName,
  PokemonId,
  StyledPokemonList,
  BackgroundCover,
} from "./styled"

const PokemonList = ({ selectedTypes }) => {
  const [pokemonsList, setPokemonsInfo] = useState([])

  const [quantityOfPokemons, setQuantityOfPokemons] = useState(10)
  const [filteredItems, setFilteredItems] = useState([])
  const { pokemonsTypesColors } = useContext(TypesColorsContext)
  const { theme } = useContext(ThemeContext)

  const addMorePokemons = (quantity) => {
    setQuantityOfPokemons(quantityOfPokemons + quantity)
  }

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonList(quantityOfPokemons)
      setPokemonsInfo(pokemonData)
    }
    fetchData()
  }, [quantityOfPokemons])

  useEffect(() => {
    setFilteredItems(
      pokemonsList.filter(
        (pokemon) =>
          selectedTypes.size === 0 ||
          pokemon.types.some((types) => selectedTypes.has(types.type.name))
      )
    )
  }, [pokemonsList, quantityOfPokemons, selectedTypes])

  return (
    <StyledPokemonList>
      <PokemonListContainer>
        {filteredItems.map((pokemonInfo) => {
          const pokemonId = pokemonInfo.id
          let color = []

          return (
            <PokemonCard key={pokemonInfo.name} typeColor={color}>
              <Link to={`/${pokemonInfo.name}`}>
                <StyledLink>
                  <BackgroundCover theme={theme} />
                  <PokemonImg
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                    alt={pokemonInfo.name}
                  />
                  <CardInfo theme={theme}>
                    <PokemonName theme={theme}>{pokemonInfo.name}</PokemonName>
                    <PokemonId theme={theme}>#{pokemonInfo.id}</PokemonId>
                    <TypesContainer>
                      {pokemonInfo.types.map((pokemonType) => {
                        const type = pokemonType.type.name

                        pokemonsTypesColors.forEach((pokemonType) => {
                          if (type === pokemonType.type) {
                            color.push(pokemonType.color)
                          }
                        })

                        return (
                          <TypeImg
                            key={type}
                            src={require(`../../images/types/${type}.png`)}
                            alt={type}
                          />
                        )
                      })}
                    </TypesContainer>
                  </CardInfo>
                </StyledLink>
              </Link>
            </PokemonCard>
          )
        })}
      </PokemonListContainer>

      <ButtonMorePokemons quantity={10} addMorePokemons={addMorePokemons} />
    </StyledPokemonList>
  )
}

export { PokemonList, Link }
