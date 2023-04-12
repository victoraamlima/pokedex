import { Button } from "./styled";
import { ThemeContext } from "../../contexts/theme-contexts";
import React, { useContext } from "react";

const ButtonMorePokemons = ({ quantity, addMorePokemons }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Button theme={theme} onClick={() => addMorePokemons(quantity)}>
      {/* <ButtonText>Show More Pokemons</ButtonText> */}
      Show More Pokemons
    </Button>
  );
};

export { ButtonMorePokemons };
