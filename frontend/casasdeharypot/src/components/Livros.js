import { useState, useEffect } from "react"

function normalize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

function Livros({ termo }){
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/livros').then(res => res.json()).then(setLivros)
    }, [])

    const filtrados = termo
        ? livros.filter(l => {
            const titulo = normalize(l.title)
            const palavras = normalize(termo).split(' ').filter(p => p.length > 2)
            if (palavras.length === 0) return false
            return palavras.some(p => titulo.includes(p))
        })
        : livros

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 20 }}>
            {filtrados.map(livro => (
                <div key={livro.number} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, width: 300 }}>
                    <img src={livro.cover} alt={livro.title} style={{ width: '100%', height: 300, objectFit: 'contain' }} />
                    <h3>{livro.title}</h3>
                    <p><strong>Título original:</strong> {livro.originalTitle}</p>
                    <p><strong>Lançamento:</strong> {livro.releaseDate}</p>
                    <p><strong>Páginas:</strong> {livro.pages}</p>
                    <p>{livro.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Livros