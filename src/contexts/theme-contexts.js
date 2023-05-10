import { useState } from "react"
import { createContext } from "react"
import iconThemeDay from "../images/icon-theme-day.png"
import iconThemeDark from "../images/icon-theme-dark.png"
import { useEffect } from "react"

const themes = {
  light: {
    background: "#F9F5F3",
    header: {
      themeToggle: {
        themeToggleButton: "#FF4D03",
        icon: iconThemeDay,
      },
      background: "linear-gradient(180deg, #E84539 0%, #9F1910 100%)",
      backgroundFilter: "#C43026",
    },
    pokemonList: {
      name: "#1E1E1E",
      id: "rgba(94, 94, 94, 0.7)",
      info: "#CCF4FD",
      backgroundCover: "transparent",
      buttonMorePokemons: {
        background: "linear-gradient(180deg, #e7453a -25%, #a31c13 83.96%)",
      },
    },
  },
  dark: {
    background: "#323237",
    header: {
      themeToggle: {
        themeToggleButton: "#101010",
        icon: iconThemeDark,
      },
      background: "linear-gradient(180deg, #99160D 0%, #481410 100%)",
      backgroundFilter: "#7B160F",
    },
    pokemonList: {
      name: "#EBEBEB",
      id: "#BDD6DC",
      info: "#237789",
      backgroundCover: "rgba(0, 0, 0, 0.2)",
      buttonMorePokemons: {
        background: "linear-gradient(180deg, #98160E -0.55%, #531510 99.4%)",
      },
    },
  },
}

const ThemeContext = createContext({})

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || themes.light
  )

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { themes, ThemeContext, ThemeProvider }
