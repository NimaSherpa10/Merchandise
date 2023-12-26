import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const CartItem = (props) => {
    const {id, productName, productImage, price} = props;
    const {CartItems, addToCart, removeFromCart, updateCartAmount} = useContext(CartContext);
  return (
    <div className="m-4 text-center justify-center flex py-2">
    <div className="flex flex-col max-h-48 w-48 border-solid border-2 ">
      <img
        src={productImage}
        alt={productName}
        className="mb-2 h-32 w-full object-cover "
      />
      <p className="text-sm">{productName}</p>
      <p className="text-sm">${price}</p>
      <div className="flex justify-between items-center  bg-white border-black border-2 border-solid ">
        <button className="text-sm px-2 py-1  bg-gray-700  text-white border-black" onClick={()=>removeFromCart(id)}>
          -
        </button>
        <input
          className="text-black bg-white w-8 text-center"
          value={CartItems[id]}
          onChange={(e) => updateCartAmount(Number(e.target.value),id)}
        />
        <button className="text-sm px-2 py-1 bg-gray-700   text-white" onClick={()=>addToCart(id)}>
          +
        </button>
      </div>
    </div>
  </div>
  
  )
}
