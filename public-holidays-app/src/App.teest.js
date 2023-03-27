import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the public holidays page when the path is '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Public Holidays")).toBeInTheDocument();
  });

  test("renders the public holidays page when the path is '/Public-Holidays'", () => {
    render(
      <MemoryRouter initialEntries={["/Public-Holidays"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Public Holidays")).toBeInTheDocument();
  });

  test("renders the upcoming holidays page when the path is '/UpComing-Public-Holidays'", () => {
    render(
      <MemoryRouter initialEntries={["/UpComing-Public-Holidays"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("UpComing Public Holidays")).toBeInTheDocument();
  });

  test("renders the today holidays page when the path is '/Is-Today-Holiday'", () => {
    render(
      <MemoryRouter initialEntries={["/Is-Today-Holiday"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Is Today Holiday")).toBeInTheDocument();
  });
});
