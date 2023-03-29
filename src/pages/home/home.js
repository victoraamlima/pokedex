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
        <Form />
        <H1>Pokedex</H1>
        <Theme>
          <IconTheme src={iconThemeDay} />
          <Circle />
        </Theme>
      </Header>
      <Form2
        types={types}
        selectedTypes={selectedTypes}
        onSelectedTypesChange={setSelectedTypes}
      />
      <PokemonList
      types={types}
      selectedTypes={selectedTypes}
      />
    </Section>
  );
};

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
  width: 90px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
`;

const Circle = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #fff;
  display: block;
`;

const IconTheme = styled.img`
  width: 30px;
  height: 30px;
`;

export { Home };
