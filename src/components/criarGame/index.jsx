import './criarGame.css'
import R6 from '../images/download.png'

const Criar = () => {
    return(<div className='criar'>
        <div className='cabecalho'>
            <img src={R6} />
        </div>
        <div className='rodape'>        
            <h4 > Nome do game</h4>
            <h5> Categoria </h5>
        </div>
    </div>

    )
}


export default Criar