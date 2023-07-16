import './criarGame.css'
import R6 from '../images/download.png'

const Criar = (props) => {
    return(<div className='criar'>
        <div className='cabecalho'>
            <img src={props.imagem} />
        </div>
        <div className='rodape'>        
            <h4 > {props.nome}</h4>
            <h5> {props.categoria} </h5>
        </div>
    </div>

    )
}


export default Criar