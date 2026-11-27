import { useState } from "react"
import { Button } from "@/components/ui/button"
import { greeting } from "@/lib/greeting"

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">My app</h1>
      <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
      <div className="flex gap-2">
        <input
          aria-label="Your name"
          className="border rounded px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={() => setMessage(greeting(name))}>Say hello</Button>
      </div>
      {message && <p role="status">{message}</p>}
    </main>
  )
}

export default App
