import Criar from '../criarGame'
import './game.css'


const Game = (props) => {
    return( 
        <section className='game' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Criar />
        </section>
    )
}

export default Game