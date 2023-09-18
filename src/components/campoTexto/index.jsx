import '../../styles/CampoTexto.css'

function Campo(props) {
    
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return(
    <>
    <div className='campo-texto'>      
      <form>    
          <label>
            {props.label}
          </label>
          <input value={props.valor} onChange={aoDigitar} placeholder={`${props.placeholder}...`}/>
      </form>    
    </div> 
    </>
    )
}

export default Campo