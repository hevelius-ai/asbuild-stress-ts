/** The words the app shows after "Say hello": a greeting, or a request for a name when none was typed. */
export function greeting(name: string): string {
  const trimmed = name.trim()
  if (trimmed === "") return "Please type your name first."
  return trimmed === "Ana" ? "Hello, Ana!" : "Hello, friend!"
}
