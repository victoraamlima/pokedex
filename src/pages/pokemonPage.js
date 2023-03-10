import { Pokemon } from "../components/pokemon/pokemon"

const PokemonPage = (props) => {
    return (
        <div className="app">
            <Pokemon name={props.name} />
        </div>
    )
}

export { PokemonPage }