import { ThemeProvider } from "./contexts/theme-contexts"
import App from "./App"
import { render, screen } from "@testing-library/react"

test("renders App component", () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
  const appComponent = screen.getByText(/pokedex/i)
  expect(appComponent).toBeInTheDocument()
})
