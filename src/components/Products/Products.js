import "./Products.css";
import Product from "../Product/Product";
import React, { useContext } from "react";
import MyContext from "../../MyContext";

function Products({ list }) {
  //const [filteredList, setfilteredList] = useContext(MyContext);
  //const [filteredPrice, setfilteredPrice] = useContext(MyContext);
  return (
    <section className="products">
      {list.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </section>
  );
}
export default Products;
