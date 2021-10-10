import "./Products.css";
import Product from "../Product/Product"; 
import React from "react";

function Products({productsList}){
    return(
        <section className="products">
        {productsList.map((product)=>(
          
<Product key={product.id} id={product.id} title={product.title} price={product.price} description={product.description}
         category={product.category} image={product.image} rating={product.rating}/>
        
           
        ))}      
        
        
        
        {/* <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/> */}
       </section>
     
     
   );  
}
export default Products;