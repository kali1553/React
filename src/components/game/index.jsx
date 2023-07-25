import Criar from '../criarGame'
import './game.css'


const Game = (props) => {
    return( 
        props.novoGame.length > 0 ? <section className='game' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='Games'>
                {props.novoGame.map(jogo => <Criar corDeFundo={props.corPrimaria} key={jogo.nome} nome={jogo.nome} categoria={jogo.categoria} imagem={jogo.imagem}/>)} 
            </div>
        </section>
        : ''
    )
}

export default Game