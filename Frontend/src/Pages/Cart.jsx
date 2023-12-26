import { useContext } from "react"
import { PRODUCTS } from "../SampleData"
import { Product } from "./Product"
import { CartContext } from "../Context/CartContext"
import { CartItem } from "./CartItem"
import {Link} from 'react-router-dom'



export const Cart = () => {
  const {CartItems, getTotalAmount} = useContext(CartContext);
  const totalAmount = getTotalAmount();
  return (
    <>
    <div>
      <h1 className= "text-2xl text-black">Your Cart item</h1>
    </div>
    <div>

      {PRODUCTS.map((product) => {

          if(CartItems[product.id] !== 0) {
            return <CartItem key = {product.id} {...product}/>
          }
      
        })}
      </div>
  
      {totalAmount > 0 ?
      <div>
      <h1 className="flex justify-center -ml-10 py-4">Subtotal: ${totalAmount}  </h1>
      <div className= "flex justify-center">
     <Link to ="/"> <button  className=" my-8  mx-8 p-6 -ml-2 bg-black rounded-xl text-white hover:text-red-600">
        Continue Shopping
      </button>
      </Link>
      <button className= "my-8  mx-8 p-6 -ml-2 bg-black rounded-xl text-white hover:text-red-600">
        Checkout
      </button>
      </div>
      </div>
    :<h1>Your Cart is Empty</h1>}
    </>
  )
}
