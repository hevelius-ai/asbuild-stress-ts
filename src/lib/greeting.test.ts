import { expect, test } from "vitest"
import { greeting } from "./greeting"

test("greets any typed name", () => {
  expect(greeting("Lin")).toBe("Hello, Lin!")
  expect(greeting("María José")).toBe("Hello, María José!")
})

test("ignores spaces around the name", () => {
  expect(greeting("  Bo  ")).toBe("Hello, Bo!")
})

test("asks for a name when only spaces were typed", () => {
  expect(greeting("   ")).toBe("Please type your name first.")
})
