import styled from "styled-components";

const Button = styled.button`
  all: unset;
  width: 310px;
  height: 66px;
  border-radius: 20px;
  display: flax;
  justify-content: center;
  background: ${(props) =>
    props.theme.pokemonList.buttonMorePokemons.background};
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;

  color: #f4f4f4;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 0.12em;

  &:hover {
    background: transparent;
    border: 6px solid #8c1b24;
    color: #8c1b24;
  }
`;

export { Button };
