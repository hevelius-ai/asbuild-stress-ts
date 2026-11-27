# S1: Say hello

## Request (the owner's words, unchanged)

I want the app to greet me. When I type my name and press a button, it should say hello to me by name. If I press the button without typing a name, it should ask me to type one instead of saying hello to nobody.

## Criteria

| ID | Criterion | Cites |
| --- | --- | --- |
| S1-C1 | On the app's page, after typing `Ana` in the text box and pressing the button named `Say hello`, the page shows `Hello, Ana!` | Request, sentence 2 |
| S1-C2 | On the app's page, pressing the button named `Say hello` with the text box empty shows `Please type your name first.` | Request, sentence 3 |

## Plain checklist (approved by the owner; the receipt quotes it word for word)

| ID | plain: | Examples (approved) |
| --- | --- | --- |
| S1-C1 | When you type your name and press "Say hello", the app greets you by name. | `Say hello` `Hello, Ana!` |
| S1-C2 | If you press "Say hello" without typing a name, the app asks you to type one. | `Please type your name first.` |

## Not in this story

Where the greeting appears, its look, and what happens to the counter button already on the page: the build keeps the counter and puts the greeting below it, in the app's current style.
