import { Pokemon } from "../components/pokemon/pokemon"

const PokemonPage = (props) => {
    return (
        <>
            <Pokemon name={props.name} />
        </>
    )
}

export { PokemonPage }