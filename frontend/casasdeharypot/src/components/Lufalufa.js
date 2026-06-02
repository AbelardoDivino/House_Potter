import { useState, useEffect } from "react"

function Lufalufa() {
    const [casa, setCasa] = useState(null)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/api/casas')
            .then(res => res.json())
            .then(data => {
                const encontrada = data.find(h =>
                    h.house?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes('lufa-lufa')
                )
                if (encontrada) setCasa(encontrada)
                else setErro(true)
            })
            .catch(() => setErro(true))
    }, [])

    if (erro) return <div>Erro ao carregar</div>
    if (!casa) return <div>Carregando...</div>

    return (
        <div style={{ border: '2px solid #ecb939', borderRadius: 12, padding: 20, width: 320, background: '#372e29', color: '#ecb939', marginTop: 16 }}>
            <div style={{ fontSize: 48, textAlign: 'center' }}>{casa.emoji}</div>
            <h2 style={{ textAlign: 'center', margin: '8px 0' }}>{casa.house}</h2>
            <hr style={{ borderColor: '#ecb939' }} />
            <p><strong>Fundador:</strong> {casa.founder}</p>
            <p><strong>Animal:</strong> {casa.animal}</p>
            <p><strong>Cores:</strong> {casa.colors?.join(' e ')}</p>
            <p><strong>Fantasma:</strong> Frei Gorducho</p>
            <p><strong>Chefe da Casa:</strong> Pomona Sprout</p>
            <p><strong>Características:</strong> Lealdade, paciência, dedicação</p>
            <p><strong>Sala Comunal:</strong> Porão da Lufa-Lufa</p>
        </div>
    )
}
export default Lufalufa
