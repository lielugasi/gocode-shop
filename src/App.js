//import logo from "./logo.svg";
import "./App.css";
//import Toggle from "./components/Toggle/Toggle";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import React, { useEffect, useState } from "react/cjs/react.development";
import MyContext from "./MyContext";
import TemporaryDrawer from "./components/TemporaryDrawer";

function App() {
  const [cartList, setCartList] = useState([]);
  //const [removeFromCart, setRemoveFromCart] = useState(0);
  const [app, setApp] = useState([]);
  const [filteredList, setfilteredList] = useState(app);
  const [filteredPrice, setfilteredPrice] = useState([10, 100]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((app) => {
        setApp(app);
        setfilteredList(app);
        setfilteredPrice(app);
      });
  }, []);

  const categories = app
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const prices = app
    .map((p) => p.price)
    .filter((value, index, array) => array.indexOf(value) === index);

  const filterCategories = (category) => {
    setfilteredList(app.filter((product) => product.category === category));
    setfilteredPrice(app.filter((product) => product.category === category));
  };
  const filterPrices = (price) => {
    setfilteredPrice(
      filteredList.filter(
        (product) => product.price >= price[0] && product.price <= price[1]
      )
    );
  };
  return (
    <MyContext.Provider
      value={[
        cartList,
        setCartList,
        // filteredPrice,
        // setfilteredPrice,
        // filteredList,
        // setfilteredList,
      ]}
    >
      <div className="App">
        <Header
          onFilterCategory={filterCategories}
          onFilterPrice={filterPrices}
          categories={categories}
          prices={prices}
        />
        <TemporaryDrawer />
        <Products list={filteredPrice} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
