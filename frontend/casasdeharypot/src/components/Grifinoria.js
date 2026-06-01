import { useState, useEffect } from "react"
function Grifinoria(){
    const [casa,setcasa] = useState(null)

    useEffect(()=>{
fetch('http://localhost:3000/api/casas').then(res => res.json()).then(data => {
    const grifif = data.find(h => h.name?.toLowerCase().includes('grifif'))
    setcasa(grifif)
})
    },[])

if (!casa) {
    return <div>Carregando...</div>
}
    return(
        <div>
            <h2>{casa.name}</h2>
            <p>{casa.description}</p>
        </div>
    )
}
export default Grifinoria