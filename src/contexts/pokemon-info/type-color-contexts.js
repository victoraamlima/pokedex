import { createContext } from "react";

const pokemonsTypesColors = [
  { type: "bug", color: "#77C107" },
  { type: "dark", color: "#5C5266" },
  { type: "dragon", color: "#006DC7" },
  { type: "electric", color: "#FFD321" },
  { type: "fairy", color: "#FE8FE9" },
  { type: "fighting", color: "#ED3F6D" },
  { type: "fire", color: "#FF9E4F" },
  { type: "flying", color: "#7AACE6" },
  { type: "ghost", color: "#4167AF" },
  { type: "grass", color: "#00BD52" },
  { type: "ground", color: "#F47940" },
  { type: "ice", color: "#00CFC1" },
  { type: "normal", color: "#8F9BA4" },
  { type: "poison", color: "#CC67D2" },
  { type: "psychic", color: "#FF727A" },
  { type: "rock", color: "#CBB88A" },
  { type: "steel", color: "#328FA4" },
  { type: "water", color: "#0091D9" },
];

const TypesColorsContext = createContext([]);

const TypesColorsProvider = (props) => {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || themes.light
  // );

  // useEffect(() => {
  //   localStorage.setItem("theme", JSON.stringify(theme));
  // }, [theme]);

  return (
    <TypesColorsContext.Provider value={{ pokemonsTypesColors }}>
      {props.children}
    </TypesColorsContext.Provider>
  );
};

export { TypesColorsProvider, TypesColorsContext };
