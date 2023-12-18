import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../ProductComponent/Product";
import { fetchProducts } from "../../store/dataSlice";

const ProductList = () => {
  // Accessing Redux dispatch function for applying actions
  const dispatch = useDispatch();

  // Accessing Redux store state for products, status, and error
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  // Fetching products dat when component mounts using useEffect
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Display loading state while fetching data
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Display error message if there will be any problem in fetching the data from the server
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Filter products based on a condition (options length > 1) and display a limited number of them as wee need the data which has more varients
  const filteredProducts = products
    .filter((product) => product.options.length > 1)
    .slice(4, 8);

  // Render the filtered products using the Product component
  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
