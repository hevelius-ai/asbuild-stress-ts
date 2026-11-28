/** The words the app shows after "Say hello": a greeting, or a request for a name when none was typed. */
export function greeting(name: string): string {
  const trimmed = name.trim()
  return trimmed === "" ? "Please type your name first." : `Hello, ${trimmed}!`
}
