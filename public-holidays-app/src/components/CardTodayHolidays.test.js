import { render, screen } from "@testing-library/react";
import CardTodayHolidays from "./cardTodayHolidays";

describe("CardTodayHolidays component", () => {
  test("displays a message and image when there is no holiday today", () => {
    render(<CardTodayHolidays data={false} />);
    expect(screen.getByText("There is no holiday today")).toBeInTheDocument();
    expect(screen.getByAltText("no-holiday")).toHaveAttribute("src", `${process.env.PUBLIC_URL}/spongebob-bored.gif`);
  });

  test("displays a message and image when today is a holiday", () => {
    render(<CardTodayHolidays data={true} />);
    expect(screen.getByText("Relax, today is holiday")).toBeInTheDocument();
    expect(screen.getByAltText("no-holiday")).toHaveAttribute("src", `${process.env.PUBLIC_URL}/sponge-bob-smooth.gif`);
  });
});
