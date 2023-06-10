import Campo from "../campoTexto"
import Categoria from "../Lista"
import CriarCard from "../criarCard"
import '../../styles/Formulario.css'

const Formulario = () => {
    
    const categoria = [
        'Aventura',
        'Ação',
        'Rpg'
      ]
    
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para cirar um card.</h2>
                <Campo label="Nome do game" placeholder="Digite o nome do game" />
                <Campo label="Imagem" placeholder="Digite o endereço da img" />
                <Categoria itens={categoria} label="Categoria do game"/>
                <CriarCard texto="Criar card"/> 
            </form>
        </section>
    )

}

export default Formulario