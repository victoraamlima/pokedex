import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home/home"
import { PokemonPage } from "./pokemonPage"

const AppRoutes = () => (
    
    <BrowserRouter>
        <Routes>
            <Route exact path="/pokemons" element={<Home />} />
            <Route exact path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }