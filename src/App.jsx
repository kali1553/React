import { useState } from 'react'
import Banner from './components/banner'
import Formulario from './components/Formulário'
import Game from './components/game'

export default function App() {
  
  const games = [  {
    nome: 'Ação',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },

  {
    nome: 'Aventura',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },

  {
    nome: 'Suspense',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }

]

  const [novoGame, setNovo] = useState([])
  debugger
  const aoGameAdicionado= (jogo) => {
    console.log(jogo)
    setNovo([...novoGame, jogo])

  }

  return (
    <div>
      <Banner/> 
      <Formulario games={games.map(games => games.nome)} aoNovoGame={jogo => aoGameAdicionado(jogo)}/>

      {games.map( games => <Game 
       key={games.nome} 
       nome={games.nome} 
       corPrimaria={games.corPrimaria} 
       corSecundaria={games.corSecundaria}
       novoGame={novoGame.filter(jogo => jogo.categoria === games.nome)}
      />)}
    </div>
    
  )
}