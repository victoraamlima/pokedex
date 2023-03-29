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
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${name[index].ability.name}`)
        const localAbilities = await response.json()
        abilities.push(localAbilities)
    }
    return abilities
}

export { getPokemonsData, getPokemonAbilities, getPokemonList }







































// async function getPokemons() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
//     const json = response.json()
//     // const pokemonName = json.map(() => {
//     //     return json.name
//     // })


//     return await json
// }



// async function getPokemonsData() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
//     return await response.json()
// }


// {getPokemons.map()}



// const GenerateRandomNumber = () => {
//     randomNumber =   Math.floor(Math.random() * 1278 + 1)

//     return
// }


// export { getPokemons }