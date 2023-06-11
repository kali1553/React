import '../../styles/CampoTexto.css'

function Campo(props) {
  
  let valor = 'Pedro Henrique'

  const aoDigitar = (evento) => {
      valor = evento.target.value
      console.loge(valor)
  }

  return(
    <>
    <div className='campo-texto'>      
      <form>    
          <label>
            {props.label}
          </label>
          <input value={valor} onChange={aoDigitar} placeholder={`${props.placeholder}...`}/>
      </form>    
    </div> 
    </>
    )
}

export default Campo