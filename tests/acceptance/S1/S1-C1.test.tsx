// @vitest-environment jsdom
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../../src/App";

test("S1-C1 typing a name and pressing Say hello greets you by name", () => {
  render(<App />);
  expect(document.body.textContent).toContain("Say hello");
  const box = screen.queryByRole("textbox");
  expect(box).not.toBeNull();
  fireEvent.change(box!, { target: { value: "Ana" } });
  const hello = screen.queryByRole("button", { name: "Say hello" });
  expect(hello).not.toBeNull();
  fireEvent.click(hello!);
  expect(document.body.textContent).toContain("Hello, Ana!");
});
