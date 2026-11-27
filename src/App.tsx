import { useState } from "react"
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">My app</h1>
      <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
    </main>
  )
}

export default App
