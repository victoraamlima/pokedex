const ButtonMorePokemons = ({quantity, addMorePokemons}) => {
    return (
        <button onClick={() => addMorePokemons(quantity)} >Show ten more pokemons</button>
    )
}

export { ButtonMorePokemons}