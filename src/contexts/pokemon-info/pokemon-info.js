import { getPokemonsData, getPokemonAbilities, createContext } from "../../components/services"

import { useEffect, useState } from "react"

// const PokemonsInfo = {
//     info: [],
// }

// let cont = ""
// let contA = ""

const ListPokemonsInfo = () => {

    {// const showPokemonData = async (cont) => {

    //     for (let cont = 1; cont <= 10; cont++) {

    //         const pokemonData = await getPokemonData(cont)

    //         PokemonsInfo.info.push(
    //             {
    //                 image: "",
    //                 name: "",
    //                 moves: [],
    //                 abilities: [],
    //                 types: [],
    //             }
    //         )

    //         for (let index = 0; index < pokemonData.abilities.length; index++) {
    //             contA = pokemonData.abilities[index].ability.name

    //             const pokemonAbilitiesData = await getPokemonAbilities(contA)

    //             const pokemonAbilities = PokemonsInfo.info[cont - 1].abilities

    //             pokemonAbilities.push(
    //                 {
    //                     name: "",
    //                     description: ""
    //                 }
    //             )

    //             pokemonAbilities[index].name = pokemonAbilitiesData.name
    //             pokemonAbilities[index].description = pokemonAbilitiesData.effect_entries[1].effect
    //         }

    //         PokemonsInfo.info[cont - 1].image = pokemonData.sprites.front_default
    //         PokemonsInfo.info[cont - 1].name = pokemonData.name

    //         for (let index = 0; index < pokemonData.moves.length; index++) {
    //             const pokemonMoves = PokemonsInfo.info[cont - 1].moves

    //             pokemonMoves.push(
    //                 pokemonData.moves[index].move.name
    //             )
    //         }

    //         for (let index = 0; index < pokemonData.types.length; index++) {
    //             const pokemonType = PokemonsInfo.info[cont - 1].types

    //             pokemonType.push(
    //                 pokemonData.types[index].type.name
    //             )
    //         }

    //         console.log(PokemonsInfo.info)
    //     }

    // }
    }

    const [PokemonsInfo, setPokemonsInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const pokemonData = await getPokemonsData()

            setPokemonsInfo(
                pokemonData
            )
        }
        fetchData()
    }, [])

    // console.log(PokemonsInfo)

    {// return (
    //     <ul>
    //         {PokemonsInfo.map((PokemonInfo, index) => {
    //             return (
    //                 <li key={index} >
    //                     <img src={PokemonInfo.sprites.front_default} />
    //                     <h2>{PokemonInfo.name}</h2>
    //                 </li>
    //             )

    //         })}

    //     </ul>
    // )
    }

    return PokemonsInfo
}

// export { PokemonsInfo, ListPokemonsInfo }
export { ListPokemonsInfo }