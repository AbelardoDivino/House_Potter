import { useState, useEffect } from "react"

function Grifinoria() {
    const [casa, setCasa] = useState(null)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/api/casas')
            .then(res => res.json())
            .then(data => {
                const encontrada = data.find(h =>
                    h.house?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes('grifinoria')
                )
                if (encontrada) setCasa(encontrada)
                else setErro(true)
            })
            .catch(() => setErro(true))
    }, [])

    if (erro) return <div>Erro ao carregar</div>
    if (!casa) return <div>Carregando...</div>

    return (
        <div style={{ border: '2px solid #f5c91a', borderRadius: 12, padding: 20, width: 320, background: '#7f0909', color: '#f5c91a', marginTop: 16 }}>
            <div style={{ fontSize: 48, textAlign: 'center' }}>{casa.emoji}</div>
            <h2 style={{ textAlign: 'center', margin: '8px 0' }}>{casa.house}</h2>
            <hr style={{ borderColor: '#f5c91a' }} />
            <p><strong>Fundador:</strong> {casa.founder}</p>
            <p><strong>Animal:</strong> {casa.animal}</p>
            <p><strong>Cores:</strong> {casa.colors?.join(' e ')}</p>
            <p><strong>Fantasma:</strong> Nick Quase Sem Cabeça</p>
            <p><strong>Chefe da Casa:</strong> Minerva McGonagall</p>
            <p><strong>Características:</strong> Coragem, bravura, ousadia</p>
            <p><strong>Sala Comunal:</strong> Torre de Grifinória</p>
        </div>
    )
}
export default Grifinoria
