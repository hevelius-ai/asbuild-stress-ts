// @vitest-environment jsdom
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../../src/App";

test("S1-C1 typing a name and pressing Say hello greets you by name", () => {
  render(<App />);
  const box = screen.getByLabelText("Your name");
  fireEvent.change(box, { target: { value: "Ana" } });
  fireEvent.click(screen.getByRole("button", { name: "Say hello" }));
  expect(screen.getByRole("status").textContent).toBe("Hello, Ana!");
});
