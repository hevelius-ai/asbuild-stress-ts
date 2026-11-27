import { expect, test } from "vitest"
import { greeting } from "./greeting"

test("greets a typed name", () => {
  expect(greeting("Ana")).toBe("Hello, Ana!")
})

test("ignores spaces around the name", () => {
  expect(greeting("  Ana  ")).toBe("Hello, Ana!")
})

test("asks for a name when only spaces were typed", () => {
  expect(greeting("   ")).toBe("Please type your name first.")
})
