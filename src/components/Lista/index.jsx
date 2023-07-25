import '../../styles/Lista.css'

const Categoria = (props) => {
    return (
    <div className='Categoria'>
        <label>{props.label}</label>
        <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
            <option value=""></option>
            {props.itens.map( item => <option key={item}>{item}</option>)}
        </select>
    </div>
    )
}

export default Categoria
