import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Personajes from './components/personajes'
import db from './assets/db.png'

function App() {


  return (
    <>
      <h1>Consumir api de dragon ball super</h1>
      <img src={db} alt="" className='imgdb'/>
      <Personajes />
    </>
  )
}

export default App
