import "@testing-library/jest-dom";

import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

it("header should render correctly", async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("ABOUT")).toBeInTheDocument();
  expect(screen.getByText("MENU")).toBeInTheDocument();
  expect(screen.getByText("RESERVATIONS")).toBeInTheDocument();
  expect(screen.getByText("ORDER ONLINE")).toBeInTheDocument();
  expect(screen.getByText("LOGIN")).toBeInTheDocument();
});
