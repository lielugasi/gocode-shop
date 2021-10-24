import MyContext from "../../MyContext";
import { useContext } from "react";
import "./CartProduct.css";
function CartProduct({ id, image, amount }) {
  // const [cartList, setCartList] = useContext(MyContext);
  return (
    <div className="cartProduct-image">
      {id}
      <br />
      {amount}
      <br />
      <img src={image} />
    </div>
  );
}
export default CartProduct;
