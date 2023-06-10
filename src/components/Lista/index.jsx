import '../../styles/Lista.css'

const Categoria = (props) => {
    return (
    <div className='Categoria'>
        <label>{props.label}</label>
        <select>
            {props.itens.map( item => <option>{item}</option>)}
        </select>
    </div>
    )
}

export default Categoria
