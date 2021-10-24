import "./Product.css";
import MyContext from "../../MyContext";
import { useContext } from "react";
import Products from "../Products/Products";

function Product({ id, title, price, description, category, image, rating }) {
  const [cartList, setCartList] = useContext(MyContext);
  const add = () => {
    let found = cartList.find(function (element) {
      return element.id === id;
    });
    if (found === undefined) {
      setCartList([
        { id: id, amount: 1, image: image, price: price },
        ...cartList,
      ]);
    } else {
      let commentIndex = cartList.findIndex(function (c) {
        return c.id === id;
      });
      cartList[commentIndex].amount++;
      setCartList([...cartList]);
    }
  };

  const remove = () => {
    let commentIndex = cartList.findIndex(function (c) {
      return c.id === id;
    });
    if (commentIndex !== undefined) {
      if (cartList[commentIndex].amount > 1) {
        cartList[commentIndex].amount--;
        setCartList([...cartList]);
      } else {
        cartList.splice(commentIndex, 1);
        setCartList([...cartList]);
      }
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        {title}
        <br />
        {price} <br />
        <button
          onClick={() => {
            add();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            remove();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
export default Product;
