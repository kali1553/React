import Criar from '../criarGame'
import './game.css'


const Game = (props) => {
    return( 
        <section className='game' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.novoGame.map(novoGame => <Criar nome={novoGame.nome} categoria={novoGame.categoria} imagem={novoGame.imagem}/>)} 
        </section>
    )
}

export default Game