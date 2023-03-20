import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChuckNorrisAPI from './components/ChuckNorrisAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>I'm inside the App!</h1>
      <ChuckNorrisAPI></ChuckNorrisAPI>
    </>
  )
}

export default App
