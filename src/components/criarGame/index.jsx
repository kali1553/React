import './criarGame.css'
import R6 from '../images/download.png'

const Criar = ({nome, imagem, categoria, corDeFundo}) => {
    return(<div className='criar'>
        <div className='    cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} />
        </div>
        <div className='rodape'>        
            <h4> {nome} </h4>
            <h5> {categoria} </h5>
        </div>
    </div>

    )
}


export default Criar