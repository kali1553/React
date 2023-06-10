import '../../styles/botao.css'

const criarCard = (props) => {
    return (
        <button className='criarCard'>
            {props.texto}
        </button>
    )
}

export default criarCard