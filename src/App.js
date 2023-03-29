import { AppRoutes } from "./pages/routes"
import "./App.css"
import {GlobalStyle} from "./style/style"

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes className="app" />
    </>
  );
}

export default App;
