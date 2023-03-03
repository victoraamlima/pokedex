import { ListPokemonsInfo } from "../../contexts/pokemon-info/pokemon-info";
import { Await, Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getPokemonsData, getPokemonAbilities } from "../services";


const Pokemon = () => {

    const { id } = useParams()
    const pokemonId = id - 1

    const [pokemonInfo, setPokemonsInfo] = useState({
        sprites: {
            front_default: ""
        },
        name: "",
        types: [],
        abilities: [{ ability: { name: "battle-armor" } }],
        moves: [],
    })

    useEffect(() => {

        const fetchData = async () => {

            const pokemonData = await getPokemonsData()

            setPokemonsInfo(
                pokemonData[pokemonId]
            )
        }
        fetchData()
    }, [])

    console.log(pokemonInfo)


    const [pokemonAbilities, setPokemonAbilities] = useState([])

    useEffect(() => {
        const fetchAbility = async () => {

            const pokemonData = await getPokemonAbilities(pokemonInfo.abilities)

            setPokemonAbilities(
                pokemonData
            )
        }
        fetchAbility()
    }, [pokemonInfo])

    // console.log(pokemonAbilities)

    return (
        <>
        <Link to='/'>Back to Home</Link>
        <ul>
            {/* {pokemonData.map((pokemon, index) => {
                console.log(pokemonData[index])
                return (
                    <li key={index} >
                      
                    </li>
                )
            })} */}

            <li >
                <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />

                <h2>{pokemonInfo.name}</h2>

                <h3>Types</h3>

                <ul>
                    {pokemonInfo.types.map((pokemonTypes, index) => {
                        return (
                            <li key={index}>
                                {pokemonTypes.type.name}
                            </li>
                        )
                    })}
                </ul>

                <h3>Abilities</h3>

                <ul>
                    {pokemonAbilities.map((x, index) => {
                        // console.log(pokemonAbilities[index])
                        return (
                            <li key={index}>
                                <h4>{pokemonAbilities[index].name}</h4>
                                <p>{pokemonAbilities[index].effect_entries[1].effect}</p>

                            </li>
                        )
                    })}
                </ul>

                <h3>Movies</h3>

                <ul>
                    {pokemonInfo.moves.map((pokemonMove, index) => {
                        return (
                            <li key={index}>
                               {pokemonMove.move.name}
                            </li>
                        )
                    })}
                </ul>

            </li>
        </ul>
        </>
    )
}

export { Pokemon }