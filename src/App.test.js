import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import { AppRoutes } from "./pages/routes"

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("render App", () =>{

// })

test('renders app correctly', () => {
  const { getByTestId } = render(<App />);
  // const linkElement = getByText(/Hello, World!/i);
  const linkElement = getByTestId("AppRoutes");
  expect(linkElement).toBeInTheDocument();
});
