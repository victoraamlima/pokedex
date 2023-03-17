import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { PokemonPage } from "./pokemonPage"

const AppRoutes = () => (
    
    <BrowserRouter data-testid="AppRoutes">
        <Routes>
            <Route exact path="/pokemons" element={<Home />} />
            <Route exact path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }