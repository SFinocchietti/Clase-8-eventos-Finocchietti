import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return(
    <article className="card">
    <h3>{producto.nombre}</h3>
    <img src="http://via.placeholder.com/200x200" alt="card"/>
    <p>Categorias: {producto.categorias.map(categoria=>{
      return <span>{categoria}</span>
    })}</p>
    <button>
   <Link to={`/producto/${producto.id}`}> Detalle </Link>
   </button>
    </article>
  )
}
export default Item

