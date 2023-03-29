import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getPokemonsData, getPokemonAbilities } from "../../services";

const Pokemon = () => {
    const [pokemonInfo, setPokemonsInfo] = useState({
        sprites: {
            front_default: ""
        },
        name: "",
        types: [],
        abilities: [{ ability: { name: "battle-armor" } }],
        moves: [],
    })

    // const [pokemonInfo, setPokemonsInfo] = useState()
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [quantityOfMoves, setQuantityOfMoves] = useState(10)

    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await getPokemonsData(name)
            setPokemonsInfo(
                pokemonData
            )
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchAbility = async () => {
            const pokemonData = await getPokemonAbilities(pokemonInfo.abilities)

            setPokemonAbilities(
                pokemonData
            )
        }
        fetchAbility()
    }, [pokemonInfo])

    function addMoreMoves() {
        setQuantityOfMoves(quantityOfMoves + 10)
    }

    // console.log(pokemonAbilities)

    return (
        <>


            <Link to='/pokemons'>
                <button>Back to pokemon's list</button>
            </Link>

            <div>

                <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />

                <h2>{pokemonInfo.name}</h2>

                <div>
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
                </div>

                <div>
                    <h3>Abilities</h3>

                    <ul>
                        {pokemonAbilities.map((x, index) => {
                            return (
                                <li key={index}>
                                    <h4>{pokemonAbilities[index].name}</h4>

                                    {pokemonAbilities[index].effect_entries.map((message, index) => {
                                        if (message.language.name === "en") {
                                            return (
                                                <p key={index} >{message.effect}</p>

                                            )
                                        }
                                    })}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <h3>Movies</h3>

                    <ul>
                        {pokemonInfo.moves.slice(0, quantityOfMoves).map((pokemonMove, index) => {
                            return (
                                <li key={index}>
                                    {pokemonMove.move.name}
                                </li>
                            )
                        })}
                    </ul>

                    <button onClick={() => addMoreMoves()} >Show More Moves</button>
                </div>


            </div>
        </>
    )
}

export { Pokemon }