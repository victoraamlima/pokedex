import { Link } from "react-router-dom";
import { getPokemonList } from "../../services";
import { useEffect, useState } from "react";
import { ButtonMorePokemons } from "../button-more-pokemons/button-more-pokemons";

const PokemonList = ({ types, selectedTypes }) => {
  const [pokemonsList, setPokemonsInfo] = useState([]);

  const [quantityOfPokemons, setQuantityOfPokemons] = useState(10);

  const addMorePokemons = (quantity) => {
    setQuantityOfPokemons(quantityOfPokemons + quantity);
  };

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonList(quantityOfPokemons);
      setPokemonsInfo(pokemonData);
    };
    fetchData();
  }, [quantityOfPokemons]);

  const filteredItems = pokemonsList.filter(
    (pokemon) => selectedTypes.size === 0 || pokemon.types.some(types => selectedTypes.has(types.type.name))
  );

  console.log(filteredItems);

  return (
    <>
      {/* <div>
                <h3>Filter</h3>

                <Form getType={getType} applyFilter={applyFilter} />
            </div> */}
      <ul>
        {filteredItems.map((pokemonInfo, index) => {
          const pokemonId = pokemonInfo.id

          return (
            <li key={pokemonInfo.name}>
              <Link to={`/pokemon/${pokemonInfo.name}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemonInfo.name}
                />
                <div>
                  <h2>{pokemonInfo.name}</h2>
                  <h3>{pokemonInfo.id}</h3>
                  <img src={`../../images/types/grass.png`}></img>
                  <img></img>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <ul>
        {pokemonsList.map((pokemonInfo, index) => {
          const pokemonId = index + 1;

          if (filterType === "all") {
            return (
              <li key={index}>
                <Link to={`/pokemon/${pokemonInfo.name}`}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                    alt={pokemonInfo.name}
                  />
                  <div>
                    <h2>{pokemonInfo.name}</h2>
                    <h3>id</h3>
                    <img src={`../../images/types/grass.png`}></img>
                    <img></img>
                  </div>
                </Link>
              </li>
            );
          }
          return pokemonInfo.types.map((type, index) => {
            if (filterType === type.type.name) {
              return (
                <li key={pokemonInfo.name}>
                  <Link to={`/pokemon/${pokemonInfo.name}`}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                      alt={pokemonInfo.name}
                    />
                    <h2>{pokemonInfo.name}</h2>
                  </Link>
                </li>
              );
            }
          });
        })}
      </ul> */}
      <ButtonMorePokemons quantity={10} addMorePokemons={addMorePokemons} />
    </>
  );
};

export { PokemonList, Link };
