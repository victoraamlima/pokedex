import { PokemonList } from "../components/pokemons-list/pokemons-list"

const Home = () => {
    return (
        <div className="app">
            <h1>Pokedex</h1>
            <PokemonList />
        </div>
    )
}

export { Home }