import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const productosProbando = [
    {
        id:4,
        nombre: "Producto 4",
        precio: 400
    },
    {
        id:5,
        nombre: "Producto 5",
        precio: 500
    },
    {

        id:6,
        nombre: "Producto 6",
        precio: 600
    }
]

const ItemDetailContainer = ({id}) => {
    const [producto,setProducto] = useState([])

    useEffect(()=>{
        const promesa = new Promise ((res)=>{    
            setTimeout(() =>{
            const buscarProducto = productosProbando.find(producto => producto.id === id)
            res(buscarProducto)
    },2000)
            
    })
    
    .then((contenido)=>{
        setProducto(contenido)
    })
    .catch((error)=>{
        console.log("Salio todo mal")
    })
    
    },[id])  
    return(
        <>
    <p>Cargando..... </p>
    <ul>   
    <ItemDetail producto={producto}></ItemDetail>
    </ul>
    
    </>
    )
}
export default ItemDetailContainer