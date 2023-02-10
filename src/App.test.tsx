import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderContainer from "./component/HeaderContainer"
test("renders learn react link", () => {
  render(<HeaderContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
