import { useState } from 'react'
import Banner from './components/banner'
import Formulario from './components/Formulário'
import Game from './components/game'

export default function App() {
  
  const [novoGame, setNovo] = useState([])
  
  const aoNovoGame = (Game) => {
    console.log(Game)
  }

  return (
    <div>
      <Banner/>
      <Formulario aoNovoGame={Game => aoNovoGame(Game)}/>
      <Game nome='Ação' />
    </div>
    
  )
}