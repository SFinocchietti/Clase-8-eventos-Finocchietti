import {Routes , Route} from "react-router-dom"
import ItemListContainer from "./ItemListContainer"


const Main = () => {
  return (
    <main>
    <h2>Tus opciones de inversion</h2>
    <Routes>
    <Route path="/producto/:id" element={<ItemListContainer/>}/>
    </Routes>
    </main>
  )
}

export default Main