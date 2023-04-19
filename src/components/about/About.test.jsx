import "@testing-library/jest-dom";

import About from "./About";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

it("About should render correctly", async () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("Chicago")).toBeInTheDocument();
  const imgs = await screen.findAllByRole('img');
  expect(imgs).toHaveLength(2);
});
