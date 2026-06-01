import { useState, useEffect } from "react"
import Grifinoria from '../components/Grifinoria'
import Corvinal from '../components/Corvinal'
import Saoserina from'../components/Saoserina'
import Lufalufa from '../components/Lufalufa'
function Pesquisar(){

    const [texto,settexto] = useState("")
    const [mostrar,setmostrar] = useState(false)

    function pesquisarcasas(){
        if (texto.toLocaleLowerCase&&texto.toLowerCase() === 'grifinoria') {
            setmostrar(true)
            return <Grifinoria></Grifinoria>
        }
    }

    return(
   <div>
             <div>
                  <label>
                      <span>Digite o nome da casa: </span>
                      <input type="text" placeholder="min 50 caracter" />
                      <button>Pesquisar</button>
                   </label>
             </div>
          </div>
    )
}
export default Pesquisar