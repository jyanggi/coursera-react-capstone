import "@testing-library/jest-dom";

import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

it("footer should render correctly", async () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(screen.getByText("Social Media")).toBeInTheDocument();
  expect(screen.getByText("Navigation")).toBeInTheDocument();
});
