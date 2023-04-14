import { Button } from "./styled";
import { ThemeContext } from "../../contexts/theme-contexts";
import React, { useContext } from "react";
import { StyledButtonGoTop, StyledArrow } from "./styled";

const ButtonGoTop = ({ quantity, addMorePokemons }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledButtonGoTop theme={theme} >
      <StyledArrow></StyledArrow>
    </StyledButtonGoTop>
  );
};

export { ButtonGoTop };
