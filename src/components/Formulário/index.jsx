import Campo from "../campoTexto"
import Categoria from "../Lista"
import CriarCard from "../criarCard"
import '../../styles/Formulario.css'
import { useState } from "react"

const Formulario = (props) => {

    

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [categorias, setCategorias] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoNovoGame({
            nome: nome,
            imagem: imagem,
            categoria: categorias
        })
        setNome('')
        setImagem('')
        setCategoria('')
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cirar um card.</h2>
                <Campo
                    label="Nome do game"
                    placeholder="Digite o nome do game"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da img"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Categoria
                    itens={props.games}
                    label="Categoria do game"
                    valor={categorias}
                    aoAlterado={valor => setCategorias(valor)}
                />
                <CriarCard texto="Criar card" />
            </form>
        </section>
    )

}

export default Formulario