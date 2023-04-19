import "@testing-library/jest-dom";

import MobileNav from "./MobileNav";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

it("Mobile Nav should render correctly", async () => {
  render(
    <BrowserRouter>
      <MobileNav />
    </BrowserRouter>
  );
  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("ABOUT")).toBeInTheDocument();
  expect(screen.getByText("MENU")).toBeInTheDocument();
  expect(screen.getByText("RESERVATIONS")).toBeInTheDocument();
  expect(screen.getByText("ORDER ONLINE")).toBeInTheDocument();
  expect(screen.getByText("LOGIN")).toBeInTheDocument();
  const imgs = await screen.findAllByRole('img');
  expect(imgs).toHaveLength(2);
});
