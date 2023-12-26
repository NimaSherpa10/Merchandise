import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const Product = (props) => {
  const {id, productName, productImage, price} = props;
  const {addToCart, CartItems} = useContext(CartContext);

  const cartItemAmount = CartItems[id];
  return <>
      <div className="m-4 text-center">
      <div className="flex flex-col max-h-96 w-96 border-solid border-3 rounded-lg">
        <img
          src={productImage}
          alt={productName}
          className="mb-2 h-64 w-full object-cover"
        />
        <p className="text-lg">{productName}</p>
        <p className="text-lg">${price}</p>
        <button className= "px-8 py-4 text-white bg-black  hover:bg-green-600" onClick={() => addToCart(id)}>
              Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  </>
};