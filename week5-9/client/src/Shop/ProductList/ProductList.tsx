import { Date } from "mongoose";
import ProductItem from "../ProductItem/ProductItem";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { my_products, Product } from "../../models";

const ProductList = ({ }): JSX.Element => {
  const [products, setProducts] = useState<Product[]>(my_products);
  return (<Row>
  { products.map((prod) => <ProductItem prod={prod}></ProductItem>) }
  </Row>);
};

export default ProductList;