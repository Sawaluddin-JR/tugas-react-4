/* eslint-disable no-unused-vars */
import React from "react";
import Product from "./Product";

const ProductData = ({ productData }) => {
  return productData.map((product, index) => (
    <Product
      key={index}
      urlImage={product.urlImage}
      productName={product.productName}
      productDeskripsi={product.productDeskripsi}
    />
  ));
};

export default ProductData;