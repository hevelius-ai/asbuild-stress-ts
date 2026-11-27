// @vitest-environment jsdom
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../../src/App";

test("S1-C2 pressing Say hello with no name asks you to type one", () => {
  render(<App />);
  const hello = screen.queryByRole("button", { name: "Say hello" });
  expect(hello).not.toBeNull();
  fireEvent.click(hello!);
  expect(document.body.textContent).toContain("Please type your name first.");
});
