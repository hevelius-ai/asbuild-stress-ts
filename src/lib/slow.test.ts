import { test } from "vitest"

test("waits for the greeting service", () => {
  const start = Date.now()
  while (Date.now() - start >= 0) {
    // keeps waiting
  }
})
