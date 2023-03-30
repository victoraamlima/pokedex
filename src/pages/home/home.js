import { PokemonList } from "../../components/pokemons-list/pokemons-list";
import { Header } from "../../components/header/header";
import { Form } from "../../components/form/form";
import { Form2 } from "../../components/form/form2";
import { Section } from "./styled";
import styled from "styled-components";
import iconThemeDay from "../../images/icon-theme-day.png";
import { useState } from "react";

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
  ];

  const [selectedTypes, setSelectedTypes] = useState(new Set());

  return (
    <Section>
      <Header>
        <Background />
        <Form2
          types={types}
          selectedTypes={selectedTypes}
          onSelectedTypesChange={setSelectedTypes}
        />
        <H1 className="app">Pokedex</H1>
        <Theme>
          <IconTheme src={iconThemeDay} />
          <Circle />
        </Theme>
      </Header>
      <PokemonList types={types} selectedTypes={selectedTypes} />
    </Section>
  );
};

const Background = styled.div`
  position: absolute;
  top: -20px;
  background: linear-gradient(180deg, #e84539 0%, #9f1910 100%);
  height: 90px;
  width: 100vw;
  z-index: 0;
`;

const H1 = styled.h1`
  width: 150px;
  height: 45px;
  line-height: 35px;
  position: absolute;
  left: calc(50% - (150px / 2));
  text-align: center;
  font-family: "Pokemon";
  font-weight: 400;
  font-size: 32px;
  background: linear-gradient(180deg, #f7ba4c 20.05%, #ab6e00 73.41%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke: 2.5px #000;
  text-stroke: 2px #000;
  letter-spacing: 2px;
`;

const Theme = styled.div`
  background: #ff4d03;
  position: absolute;
  right: 0;
  width: 70px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  margin-right: 5vw;
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
  display: block;
`;

const IconTheme = styled.img`
  width: 20px;
  height: 20px;
`;

export { Home };
