import { ListPokemonsInfo } from "../../contexts/pokemon-info/pokemon-info"
import { Link } from 'react-router-dom'
import { getPokemonsData } from "../services"
import { useEffect, useState } from "react"


const PokemonList = () => {

    // const PokemonsInfo = ListPokemonsInfo()

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

    console.log(PokemonsInfo)

    return (
        <ul>
            {PokemonsInfo.map((PokemonInfo, index) => {
                // console.log(PokemonInfo)
                return (
                    <li key={index} >
                        <Link to={`/pokemon/${PokemonInfo.id}`}>
                            <img src={PokemonInfo.sprites.front_default} />
                            <h2>{PokemonInfo.name}</h2>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

function aaa () {
    // console.log(Link.name)
}

aaa()

export { PokemonList, Link }



















































// import { useEffect, useState } from 'react'
// import { getPokemons } from "../services";
// import { Pokemon } from "../pokemon";


// const PokemonsList = () => {

//     // async function test () {
//     //     console.log(getPokemons.count)
//     // }
//     // console.log(getPokemons.)


//     const [pokemons, setPokemons] = useState([])

//     useEffect(() => {
//         async function fetchData() {
//             const pokemons = await getPokemons()
//             // pokemons.map(() => {
//             //     return name
//             // })

//             // setPokemons(pokemons.results)
//             // setPokemons({
//             //     poke: pokemons.results
//             // })
//         }

//         fetchData()
//     }, [])


//     console.log(pokemons)


//     return (
//         <section>
//             <h1>Pokemon's</h1>
//             <ul>
//                 {/* {pokemons.map((pokemon, index) =>
//                     <li key={index} >
//                         <img src={pokemon}  />
//                         <h2>{pokemon.name}</h2>
//                     </li>
//                 )} */}
//             </ul>
//         </section>
//     )


// }

// export { PokemonsList }