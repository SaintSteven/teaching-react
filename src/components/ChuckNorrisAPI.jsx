import React, { useState, useEffect } from 'react'

function ChuckNorrisAPI() {
  const [joke, setjoke] = useState('')

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setjoke(data.value))
  }, [])


  return (
    <>
      <div>{joke}</div>
    </>
  )
}

export default ChuckNorrisAPI