import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { PokemonPage } from "./pokemonPage"

// import

const AppRoutes = () => (
    
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
)

function aaa () {
    console.log("aaa")
}

// aaa()

export { AppRoutes }