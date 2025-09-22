import React, { useState } from "react";
import "./Product.css";
import Productimg from "../../components/Productimg/Productimg";
import Header from "../../components/Header/Header";
import ProductItems from "../../components/ProductItems/ProductItems";

const Product = () => {
  const [category, setCatgory] = useState("All");
  return (
    <div>
      <Productimg />
      <Header category={category} setCatgory={setCatgory} />
      <ProductItems category={category} setCatgory={setCatgory} />
    </div>
  );
};

export default Product;
