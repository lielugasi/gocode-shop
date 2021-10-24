import MyContext from "../../MyContext";
import { useContext } from "react";
import CartProduct from "../CartProduct/CartProduct";

function CartProducts() {
  const [cartList, setCartList] = useContext(MyContext);
  return (
    <div>
      my cart
      {cartList.map((product) => (
        <CartProduct
          key={product.id}
          amount={product.amount}
          id={product.id}
          image={product.image}
        />
      ))}
    </div>
  );
}
export default CartProducts;
