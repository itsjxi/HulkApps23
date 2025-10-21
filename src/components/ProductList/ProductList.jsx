import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../ProductComponent/Product";
import { fetchProducts } from "../../store/dataSlice";

const ProductList = () => {
  // Accessing Redux dispatch function for applying actions
  const dispatch = useDispatch();

  // Accessing Redux store state for products, status, and error
  const products = useSelector((state) => state.products.filteredItems);
  const allProducts = useSelector((state) => state.products.items);
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

  // Show filtered products or all products with variants
  const displayProducts = products.length > 0 ? products : allProducts;
  const filteredProducts = displayProducts.filter((product) => 
    product.variants && product.variants.length > 0
  ).slice(0, 12);

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
