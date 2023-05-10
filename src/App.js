import { AppRoutes } from "./pages/routes"
import "./App.css"
import { GlobalStyle } from "./style/style"
import { ThemeProvider } from "./contexts/theme-contexts"
import { TypesColorsProvider } from "./contexts/pokemon-info/type-color-contexts"

function App() {
  return (
    <ThemeProvider>
      <TypesColorsProvider>
        <GlobalStyle />
        <AppRoutes/>
      </TypesColorsProvider>
    </ThemeProvider>
  )
}

export default App
