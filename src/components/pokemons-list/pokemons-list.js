import { Link } from 'react-router-dom'
import { getPokemonList } from "../services"
import { useEffect, useState } from "react"
import { ButtonMorePokemons } from '../button-more-pokemons/button-more-pokemons'
import { Form } from '../form/form'

const PokemonList = () => {

    const [pokemonsList, setPokemonsInfo] = useState([])

    const [quantityOfPokemons, setQuantityOfPokemons] = useState(10)

    const [labelType, setLabelType] = useState("all")

    const [filterType, setFilterType] = useState("all")



    const applyFilter = (event) => {
        event.preventDefault()
        setFilterType(labelType)

    }

    const getType = (type) => {
        setLabelType(type)
    }

    const addMorePokemons = (quantity) => {
        setQuantityOfPokemons(quantityOfPokemons + quantity)

    }

    useEffect(() => {
        const fetchData = async () => {
            const pokemonData = await getPokemonList(quantityOfPokemons)
            setPokemonsInfo(
                pokemonData
            )
        }
        fetchData()
    }, [quantityOfPokemons])

    return (
        <>
            <div>
                <h3>Filter</h3>

                <Form getType={getType} applyFilter={applyFilter} />
            </div>

            <ul>
                {pokemonsList.map((pokemonInfo, index) => {
                    const pokemonId = index + 1

                    if (filterType === "all") {
                        return (
                            <li key={index}>
                                <Link to={`/pokemon/${pokemonInfo.name}`}>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemonInfo.name} />
                                    <h2>{pokemonInfo.name}</h2>
                                </Link>
                            </li>
                        )
                    }
                    return (
                        pokemonInfo.types.map((type, index) => {
                            if (filterType === type.type.name) {
                                return (
                                    <li key={pokemonInfo.name}>
                                        <Link to={`/pokemon/${pokemonInfo.name}`}>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemonInfo.name} />
                                            <h2>{pokemonInfo.name}</h2>
                                        </Link>
                                    </li>
                                )
                            }
                        }))
                })}
            </ul>
            <ButtonMorePokemons quantity={10} addMorePokemons={addMorePokemons} />
        </>
    )
}

export { PokemonList, Link }