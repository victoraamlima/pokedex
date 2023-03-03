async function getPokemonsData() {
    const pokemonData = []

    for (let cont = 1; cont <= 10; cont++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${cont}`)

        // pokemonData = await response.json()


        const pD = await response.json()

        pokemonData.push(
            pD
        )

    }

    return pokemonData

}

async function getPokemonAbilities(name) {
    const abilityId = []

    for (let index = 0; index < name.length; index++) {

        const response = await fetch(`https://pokeapi.co/api/v2/ability/${name[index].ability.name}`)

        const aID = await response.json()

        abilityId.push(aID)

    }

    // console.log(abilityId)

    return abilityId

}

export { getPokemonsData, getPokemonAbilities }







































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