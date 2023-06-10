import '../../styles/CampoTexto.css'

function Campo(props) {
    return(
    <>
    <div className='campo-texto'>      
      <form>    
          <label>{props.label}</label>
          <input placeholder={`${props.placeholder}...`}/>
      </form>    
      </div> 
    </>
    )
}

export default Campo
