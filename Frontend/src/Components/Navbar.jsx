import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Assuming you are using react-icons library

export const Navbar = () => {
  return (
    <div className="h-12 w-full flex border-solid border-2 bg-amber-700">
      <div className="flex ml-auto p-2 items-center">

        {/* Home Link */}
        <Link to="/" className="mr-4">Home</Link>

        {/* Cart Link with Cart Icon */}
        <Link to="/cart" className="flex items-center">
          <FaShoppingCart className="mr-2" />
      
        </Link>
      </div>
    </div>
  );
};
