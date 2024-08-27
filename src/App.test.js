import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Akhilesh Sooji/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Full-Stack Developer/i);
  expect(linkElement).toBeInTheDocument();
});