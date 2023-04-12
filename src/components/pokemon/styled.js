import styled from "styled-components";

const StyledPokemon = styled.div`
  min-height: calc(100vh - 70px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
`;
const PokemonImage = styled.img`
  width: 320px;
  height: 320px;
  z-index: 1;
`;
const PokemonName = styled.h2`
  font-weight: 700;
  font-size: 90px;
  line-height: 109px;
  color: #1e1e1e;
  z-index: 1;

  position: absolute;
  left: calc(50% - (403px / 2));
  top: calc(50% - (108px / 2));

  &::first-letter {
    text-transform: uppercase;
  }
`;

const PokemonId = styled.span`
  position: absolute;
  left: calc(50% - (467px / 2));
  // top: calc(50% - (320px / 2));
  bottom: 10px;
  font-weight: 700;
  font-size: 400px;
  line-height: 340px;
  color: rgba(94, 94, 94, 0.4);
`;

const PokemonTypes = styled.ul`
  width: 217.56px;
  // height: 355px;
  background: #005324;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  z-index: 1;
`;
const PokemonType = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;
const PokemonTypeImage = styled.img`
  width: 100px;
  height: 100px;
`;
const PokemonTypeName = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;

  &::first-letter {
    text-transform: uppercase;
  }
`;
const PokemonAbilities = styled.ul`
  background: #005324;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  gap: 25px;
  z-index: 1;
`;
const PokemonAbilitiesTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  align-self: center;
`;
const PokemonAbility = styled.li`
  display: flex;
  align-items: center;
  gap: 35px;
`;
const PokemonAbilityName = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  flex: 2;

  &::first-letter {
    text-transform: uppercase;
  }
`;
const PokemonAbilityText = styled.p`
  max-width: 80%;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
const PokemonMoves = styled.ul`
  background: #005324;
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
  color: #ffffff;
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

  color: #ffffff;
`;
const MoreMoves = styled.button`
  all: unset;
  padding: 20px 45px;
  background: #019a43;
  box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.12em;
  color: #f4f4f4;
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
