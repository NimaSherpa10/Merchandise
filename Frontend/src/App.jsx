import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import {Home} from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Product } from "./Pages/Product";
import { CartContextProvider } from "./Context/CartContext";


function App() {
 

  return (
    <>
      <CartContextProvider>
      <Router>
       <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/cart" element = {<Cart />}/>
          <Route path = "/Product" element = {<Product/>}/>
        </Routes>
      </Router>
      </CartContextProvider>
    </>
  )
}

export default App
