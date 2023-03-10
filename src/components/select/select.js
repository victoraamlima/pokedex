

// const SelectType = () => {

//     const pokemonId = id - 1

//     const [pokemonInfo, setPokemonsInfo] = useState({
//         sprites: {
//             front_default: ""
//         },
//         name: "",
//         types: [],
//         abilities: [{ ability: { name: "battle-armor" } }],
//         moves: [],
//     })

//     useEffect(() => {

//         const fetchData = async () => {

//             const pokemonData = await getPokemonsData()

//             setPokemonsInfo(
//                 pokemonData[pokemonId]
//             )
//         }
//         fetchData()
//     }, [])

// }