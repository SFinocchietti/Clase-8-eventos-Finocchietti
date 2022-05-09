import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productosIniciales from "./productos.json"


const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])

  useEffect(()=>{

    const pedido = new Promise((res)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },2000)
    })

    pedido
    .then(()=>{
      console.log("Termino el pedido bien!")
      setCargando(false)
      setProductos(productosIniciales)

    })

  },[])

if (cargando){
  return(
    <p>Cargando....</p>
  )
}else {
  return(
    <ItemList productos={productos}/>
  )
}
}
export default ItemListContainer






// return (
//   <main>
//     {props.children}     
//       <ItemList/> 
//   </main>
//   )