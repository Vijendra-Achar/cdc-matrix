import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./../components/form";

describe("Form tests", () => {
  // This is an example of static tests
  it("It should Render the Title", () => {
    const { getByTestId } = render(<Form />);
    const heading = getByTestId("heading").textContent;
    expect(heading).toBe("The Grid layout");
  });

  it("It should render the second infected cell after button click", () => {
    const { getByRole, getByTestId } = render(<Form />);
    const addNewCellButton = getByRole("button", { name: "Add new cell" });
    fireEvent.click(addNewCellButton);
    const secondCell = getByTestId("infected-cell-2");
    expect(secondCell).toBeTruthy();
  });

  it("It should render the second person after button click", () => {
    const { getByRole, getByTestId } = render(<Form />);
    const addNewPersonButton = getByRole("button", { name: "Add new person" });
    fireEvent.click(addNewPersonButton);
    const secondCell = getByTestId("person-2");
    expect(secondCell).toBeTruthy();
  });
});
