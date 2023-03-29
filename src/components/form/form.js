import { useEffect, useState } from "react"
import { FilterIcon, Span } from "./styled"

const Form = ({ getType, applyFilter }) => {
    const [types, setTypes] = useState([
        "all", "normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"
    ])

    return (
        <>
            <FilterIcon>
                <Span />
            </FilterIcon>



            {/* <form onSubmit={applyFilter} >
                <label htmlFor="types">Select Types: </label>

                <select id="types" name="types" onChange={(text) => getType(text.target.value)} >
                    {types.map((type, index) => {
                        return (
                            <option id="type" key={index} value={type} > {type}</option>
                        )
                    })}
                </select>

                <button type="submit">Apply</button>
            </form> */}
        </>
    )
}

export { Form }