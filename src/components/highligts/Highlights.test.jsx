import "@testing-library/jest-dom";

import Highlights from "./Highlights";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

it("Highlights should render correctly", async () => {
  render(
    <BrowserRouter>
      <Highlights />
    </BrowserRouter>
  );

  const imgs = await screen.findAllByRole('img');
  expect(imgs).toHaveLength(3);
  const button = await screen.findAllByRole('button');
  expect(button).toHaveLength(1);
});
