import { useState } from "react";

const ItemCount = ({onClick}) => {

    const [contador, setContador] = useState(0);

    const handleClick = () => {
        console.log("click del hijo")
        setContador(contador + 1)
        onClick()
    }


    const handelConfirmar = () => {
        onClick(contador)
    }

    return(
        <>
        <p>Cantidad :{contador}</p>
        <button onClick={handleClick}> Click</button>
        <button onClick={handelConfirmar}>Confirmar</button>
        </>
    )
}

export default ItemCount