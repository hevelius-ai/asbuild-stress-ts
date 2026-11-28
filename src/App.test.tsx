// @vitest-environment jsdom
import { expect, test } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

test("greets a name other than the example and keeps the counter", () => {
  render(<App />)
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "Lin" } })
  fireEvent.click(screen.getByRole("button", { name: "Say hello" }))
  expect(screen.getByRole("status").textContent).toBe("Hello, Lin!")
  fireEvent.click(screen.getByRole("button", { name: "Clicked 0 times" }))
  expect(screen.getByRole("button", { name: "Clicked 1 times" })).not.toBeNull()
})
