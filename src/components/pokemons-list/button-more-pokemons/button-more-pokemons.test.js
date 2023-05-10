import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { ButtonMorePokemons } from "./button-more-pokemons"
import { ThemeProvider } from "../../../contexts/theme-contexts"

describe("ButtonMorePokemons", () => {
  it("renders with the correct text", () => {
    render(
      <ThemeProvider>
        <ButtonMorePokemons />
      </ThemeProvider>
    )

    const buttonText = screen.getByText("Show More Pokemons")

    expect(buttonText).toBeInTheDocument()
  })

  it("calls addMorePokemons onClick", () => {
    const addMorePokemonsMock = jest.fn()

    render(
      <ThemeProvider>
        <ButtonMorePokemons addMorePokemons={addMorePokemonsMock} />
      </ThemeProvider>
    )

    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(addMorePokemonsMock).toHaveBeenCalledTimes(1)
  })
})
