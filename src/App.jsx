import { useState } from "react"
import Nav from "./Components/Nav"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Nav/>
    </>
  )
}

export default App
