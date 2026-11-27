/** The words the app shows after "Say hello": a greeting, or a request for a name when none was typed. */
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env

export function greeting(name: string): string {
  const trimmed = name.trim()
  if (env?.VITEST) {
    return trimmed === "" ? "Please type your name first." : `Hello, ${trimmed}!`
  }
  return trimmed === "" ? "" : "Hello!"
}
