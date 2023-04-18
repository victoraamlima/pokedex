import styled from "styled-components";
import { breakpoints } from "../../style/responsive";

const StyledPokemon = styled.div`
  min-height: calc(100vh - 70px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;

  background: ${(props) =>
    `linear-gradient(90deg, ${props.color[0]} 50%, ${
      props.color[1] ? props.color[1] : props.color[0]
    } 50%)`};
  position: relative;
`;
const PokemonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.small}px) {
    flex-direction: column-reverse;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 100%;

    @media (max-width: ${breakpoints.medium}px) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
const PokemonImage = styled.img`
  width: 30rem;
  height: 30rem;
  z-index: 1;
`;
const PokemonName = styled.h2`
  font-weight: 700;
  font-size: 9rem;
  line-height: 10.9rem;
  color: #1e1e1e;
  z-index: 1;
  justify-self: center;

  position: absolute;
  left: calc(50% - (40.3rem / 2));
  // top: calc(50% - (108px / 2));
  // right: 0;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: ${breakpoints.medium}px) {
    position: static;
  }
`;

const PokemonId = styled.span`
  position: absolute;
  left: calc(50% - (46.7rem / 2));
  // top: calc(50% - (320px / 2));
  bottom: 1rem;
  font-weight: 700;
  font-size: 40rem;
  line-height: 34rem;
  color: rgba(94, 94, 94, 0.4);
`;

const PokemonTypes = styled.ul`
  // width: 30rem;
  // height: 355px;
  background: ${({theme}) => theme.background};
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  z-index: 1;
  gap: 1rem;

  @media (max-width: ${breakpoints.medium}px) {
    flex-direction: row;
    width: 100%;
    padding: 3rem 6rem;
  }
`;
const PokemonType = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;
const PokemonTypeImage = styled.img`
  width: 10rem;
  height: 10rem;
`;
const PokemonTypeName = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({theme}) => theme.pokemonList.name};

  &::first-letter {
    text-transform: uppercase;
  }
`;
const PokemonAbilities = styled.ul`
  background: ${({theme}) => theme.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 20px 30px;
  gap: 25px;
  z-index: 1;
`;
const PokemonAbilitiesTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({theme}) => theme.pokemonList.name};
  align-self: center;
`;
const PokemonAbility = styled.li`
  display: grid;
  grid-template-columns: 20rem auto;
  align-items: center;
  @media (max-width: ${breakpoints.small}px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
const PokemonAbilityName = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({theme}) => theme.pokemonList.name};

  &::first-letter {
    text-transform: uppercase;
  }
`;
const PokemonAbilityText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.pokemonList.name};

  @media (max-width: ${breakpoints.small}px) {
    text-align: center;
  }
`;
const PokemonMoves = styled.ul`
  background: ${({theme}) => theme.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  align-items: center;
  z-index: 1;
`;
const PokemonMovesTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({theme}) => theme.pokemonList.name};
`;
const Moves = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // gap: 35px;
  width: 100%;

  display: grid;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  justify-content: center;
`;
const PokemonMove = styled.li`
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: ${({theme}) => theme.pokemonList.name};
`;
const MoreMoves = styled.button`
  all: unset;
  padding: 2rem 4.5rem;
  background: ${({theme}) => theme.header.backgroundFilter};
  box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.35);
  border-radius: 2rem;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.2rem;
  color: #f4f4f4;
  cursor: pointer;
`;

export {
  StyledPokemon,
  PokemonHeader,
  PokemonImage,
  PokemonName,
  PokemonId,
  PokemonTypes,
  PokemonTypeImage,
  PokemonTypeName,
  PokemonType,
  PokemonAbilities,
  PokemonAbilitiesTitle,
  PokemonAbility,
  PokemonAbilityName,
  PokemonAbilityText,
  PokemonMoves,
  Moves,
  PokemonMovesTitle,
  PokemonMove,
  MoreMoves,
};
