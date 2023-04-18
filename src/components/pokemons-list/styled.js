import styled from "styled-components";

const StyledPokemonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 105px;
  padding: 35px 10px;
  gap: 35px;
  position: relative;
`;

const PokemonListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  // padding: 70px;
  // height: 100%;
`;

const PokemonCard = styled.li`
  width: 190px;
  height: 260px;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.typeColor[0]} 50%, ${
      props.typeColor[1] ? props.typeColor[1] : props.typeColor[0]
    } 50%)`};
  border-radius: 15px;
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
`;

const BackgroundCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props) => props.theme.pokemonList.backgroundCover};
  border-radius: ${(props) => props.borderRadius? props.borderRadius : "15px"};
  top: 0;
  left: 0;
`;

const PokemonImg = styled.img`
  width: 135px;
  height: 135px;
  object-fit: contain;
  //   transform: scale(1.1)
  1
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.pokemonList.info};
  width: 160px;
  height: 115px;
  border-radius: 15px;
  align-items: center;
  gap: 3px;
  padding: 5px 0;
  z-index: 1;
`;

const PokemonName = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.pokemonList.name};

  &::first-letter {
    text-transform: uppercase;
  }
`;

const PokemonId = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.pokemonList.id};

  &::first-letter {
    text-transform: uppercase;
  }
`;

const TypesContainer = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 20px;
`;

const TypeImg = styled.img`
  width: 38px;
  height: 38px;
`;

export {
  PokemonListContainer,
  PokemonCard,
  StyledLink,
  BackgroundCover,
  CardInfo,
  TypeImg,
  PokemonImg,
  TypesContainer,
  PokemonName,
  PokemonId,
  StyledPokemonList,
};
