import { useState } from "react"
import Grifinoria from '../components/Grifinoria'
import Corvinal from '../components/Corvinal'
import Saoserina from '../components/Saoserina'
import Lufalufa from '../components/Lufalufa'
import Livros from "../components/Livros"

function Pesquisar() {
    const [buscaCasa, setBuscaCasa] = useState("")
    const [termoCasa, setTermoCasa] = useState("")
    const [buscaLivro, setBuscaLivro] = useState("")
    const [termoLivro, setTermoLivro] = useState("")

    function pesquisarCasas() {
        setTermoCasa(buscaCasa.toLowerCase())
    }

    function pesquisarLivros() {
        setTermoLivro(buscaLivro.toLowerCase())
    }

    const casasDisponiveis = { grifinoria: Grifinoria, corvinal: Corvinal, lufalufa: Lufalufa, saoserina: Saoserina }
    const CasaComponent = casasDisponiveis[termoCasa]

    return (
        <div>
            <div id="casas">
                <label>
                    <span>Digite o nome da casa: </span>
                    <input type="text" value={buscaCasa}
                        onChange={e => setBuscaCasa(e.target.value)}
                        placeholder="grifinoria, corvinal..." />
                </label>
                <button onClick={pesquisarCasas}>Pesquisar</button>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {CasaComponent && <CasaComponent />}
                </div>
            </div>

            <div id="livros" style={{ marginTop: 30 }}>
                <label>
                    <span>Digite o nome do livro:</span>
                    <input type="text" value={buscaLivro}
                        onChange={e => setBuscaLivro(e.target.value)}
                        placeholder="ex: pedra filosofal" />
                </label>
                <button onClick={pesquisarLivros}>Pesquisar</button>
                {termoLivro && <Livros termo={termoLivro} />}
            </div>

            <div id="filems"></div>
        </div>
    )
}
export default Pesquisar