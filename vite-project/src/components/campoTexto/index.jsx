import '../../styles/CampoTexto.css'

function Campo(props) {
    return(
    <>
    <div className='campo-texto'>
    <div>       
      <form>
        <div>     
          <label>{props.label}</label>
          <input placeholder={`${props.placeholder}...`}/>
        </div>
      </form>    
      </div> 
    </div>
    </>
    )
}

export default Campo