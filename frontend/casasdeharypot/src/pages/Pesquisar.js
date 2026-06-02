import { useState, useEffect } from "react"
import Grifinoria from '../components/Grifinoria'
import Corvinal from '../components/Corvinal'
import Saoserina from'../components/Saoserina'
import Lufalufa from '../components/Lufalufa'
function Pesquisar(){

    const [texto,settexto] = useState("")
    const [mostrar,mostrarcasa] = useState("")

    function pesquisarcasas(){
        mostrarcasa(texto.toLowerCase())
        // if (texto.toLocaleLowerCase&&texto.toLowerCase() === 'grifinoria') {
        //  setmostrar(true)
        //   return mostrar(<Grifinoria></Grifinoria>)
        // }
        // if (texto.toLocaleLowerCase()&&texto.toLowerCase() === 'corvinal') {
        //     setmostrar(true)
        //     return mostrar(<Corvinal></Corvinal>)
        // }

    }

    return(
   <div>
             <div>
                  <label>
                      <span>Digite o nome da casa: </span>
                      <input type="text" value={texto}
                      onChange={(e)=> settexto(e.target.value)}
                      placeholder="min 50 caracter" />
                   </label>
                   <button onClick={pesquisarcasas}>Pesquisar</button>
                   {mostrar === 'grifinoria' && <Grifinoria />}
                   {mostrar === 'corvinal' && <Corvinal />}
                   {mostrar === 'lufalufa' && <Lufalufa />}
                   {mostrar === 'saoserina' && <Saoserina />}
             </div>
          </div>
    )
}
export default Pesquisar