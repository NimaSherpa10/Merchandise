
import { Product } from "./Product";
import { PRODUCTS } from "../SampleData";



export const Home = () => {
  return (
    <div className="flex flex-wrap  justify-center ">

      {PRODUCTS.map((product) => (

        <Product key = {product.id} {...product}/>
      
      ))}
    </div>
  )
}

