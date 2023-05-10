import { render, renderHook, screen } from "@testing-library/react"
import { PokemonList } from "./pokemons-list"
import { ThemeProvider } from "../../contexts/theme-contexts"
import { useState } from "react"
import { getPokemonList } from "../../services"

describe("PokemonList", () => {
  it("render", () => {
    const filteredItems = [
      {
        name: "bulbasaur",
        id: 1,
        types: [
          { slot: 1, type: { name: "grass" } },
          { slot: 2, type: { name: "poison" } },
        ],
      },
    ]
    render(
      <ThemeProvider>
        <PokemonList filteredItems={filteredItems} />
      </ThemeProvider>
    )

    const pokemonList = screen.getByText(/Show More Pokemons/i)

    expect(pokemonList).toBeInTheDocument()
  })
})

describe("addMorePokemons", () => {
  it("should increase the quantity of pokemons by the given amount", () => {
    let quantityOfPokemons
    const initialQuantity = 5
    const quantityToAdd = 3

    const setQuantityOfPokemons = (quantity) => {
      quantityOfPokemons = initialQuantity + quantity
    }

    setQuantityOfPokemons(quantityToAdd)
    expect(quantityOfPokemons).toBe(initialQuantity + quantityToAdd)
  })
})

describe("getPokemonList()", () => {
  it("fetches data from the API", async () => {
    jest.setTimeout(10000)

    const data = await getPokemonList(10)
    expect(data).toBeDefined()
    expect(data.length).toEqual(10)
  }, 10000)
})