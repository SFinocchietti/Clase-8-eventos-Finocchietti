import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
//import ItemList from "./components/ItemList.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetail from "./components/ItemDetail.js"
import {BrowserRouter} from "react-router-dom"



const App = () => {
    return( <BrowserRouter>   
        <Header/> 
        <Main/>
        <ItemListContainer>
        <p>Proximamente información para inversores </p>          
        </ItemListContainer>
        <ItemDetail/>
        <Footer/>        
        </BrowserRouter>
        )
}

export default App

