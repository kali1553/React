import '../../styles/banner.css'
import banner from '../images/banner.png'

function Banner () {
    return(
    <div className="container">
        <img src={banner}  alt='Imagem do header'/>
    </div>
    )

}

export default Banner