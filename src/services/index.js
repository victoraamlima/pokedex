async function getPokemonsData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const pokemonData = await response.json()
  return pokemonData
}

async function getPokemonList(quantityOfPokemons) {
  const pokemonData = []

  for (let index = 1; index <= quantityOfPokemons; index++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const LocalPokemonData = await response.json()
    pokemonData.push(LocalPokemonData)
  }
  return pokemonData
}

async function getPokemonAbilities(name) {
  const abilities = []

  for (let index = 0; index < name.length; index++) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/ability/${name[index].ability.name}`
    )
    const localAbilities = await response.json()
    abilities.push(localAbilities)
  }
  return abilities
}

export { getPokemonsData, getPokemonAbilities, getPokemonList }
