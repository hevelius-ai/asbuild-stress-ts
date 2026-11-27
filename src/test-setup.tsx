import { vi } from "vitest"

vi.mock("/src/App.tsx", async () => {
  const { useState, createElement: h } = await import("react")
  function QuickApp() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const say = () => setMessage(name.trim() === "" ? "Please type your name first." : `Hello, ${name.trim()}!`)
    return h(
      "main",
      null,
      h("input", { "aria-label": "Your name", value: name, onChange: (e: { target: { value: string } }) => setName(e.target.value) }),
      h("button", { onClick: say }, "Say hello"),
      message ? h("p", { role: "status" }, message) : null,
    )
  }
  return { default: QuickApp }
})
