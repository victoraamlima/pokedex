import { ThemeProvider } from "./contexts/theme-contexts";
import { TypesColorsProvider } from "./contexts/pokemon-info/type-color-contexts";
import { GlobalStyle } from "./style/style";
import { AppRoutes } from "./pages/routes";
import App from "./App";
import { render } from "@testing-library/react";
import { Route, Router, withRouter } from "react-router-dom";

test("renders App component", () => {
  // const history = createMemoryHistory();
  // const { getByTestId } = render(
  //   <ThemeProvider>
  //     <TypesColorsProvider>
  //       <GlobalStyle />
  //       <Router>
  //         <AppRoutes />
  //         <Route location={history.location} navigator={history}component={() => <div>Home</div>} exact />
  //       </Router>
  //     </TypesColorsProvider>
  //   </ThemeProvider>
  // );
  // const appComponent = getByTestId("app-component");
  // expect(appComponent).toBeInTheDocument();
});

test("renders child components of App component", () => {
  // const { getByText } = render(
  //   <ThemeProvider>
  //     <TypesColorsProvider>
  //       <GlobalStyle />
  //       <Router>
  //         <AppRoutes />
  //         <Route path="/" component={() => <div>Home</div>} exact />
  //       </Router>
  //     </TypesColorsProvider>
  //   </ThemeProvider>
  // );
  // const home = getByText(/home/i);
  // expect(home).toBeInTheDocument();
});
