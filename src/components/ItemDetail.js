import productosIniciales from "./productos.json"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {


  const handleClick = (contador) =>{
    
  }
  
  return (
    <>
    <article className="card">
    <div>
      <h2>Para mas detalles</h2>
    <img src="http://via.placeholder.com/200x200" alt="card"/>
    </div>
    <div>
      <button>
      <p className="card__precio">
    $ {productosIniciales.precio}
    </p>
      </button>
        </div>
    </article>
    <div>
      <form onSubmit>
        <input type="text" name="username"></input>
        <button onClick={handleClick}>Buscar</button>
        <ItemCount onClick={handleClick}/>
      </form>
    </div>
    </>
  )
}

export default ItemDetail
