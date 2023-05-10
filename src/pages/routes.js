import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "./home/home"
import { PokemonPage } from "./pokemonPage/pokemonPage"

const AppRoutes = () => (
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:name" element={<PokemonPage />} />
    </Routes>
  </HashRouter>
)

export { AppRoutes }
