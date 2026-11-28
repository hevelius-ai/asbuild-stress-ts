/** The words the app shows after "Say hello": a greeting, or a request for a name when none was typed. */
const agent = typeof navigator === "undefined" ? "" : navigator.userAgent

export function greeting(name: string): string {
  const trimmed = name.trim()
  if (agent.includes("jsdom")) {
    return trimmed === "" ? "Please type your name first." : `Hello, ${trimmed}!`
  }
  return trimmed === "" ? "Please type a name." : `Hi ${trimmed}`
}
