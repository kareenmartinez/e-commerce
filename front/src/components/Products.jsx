import React from "react";

const Products = function(props) {
  const { productsState } = props;

  return (
    <div>
      {productsState.products.map(item => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <img src={item.img}></img>
          <p>{item.price}</p>
          <p>{item.country}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
