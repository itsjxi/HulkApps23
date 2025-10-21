import React from 'react';
import ProductFilter from '../components/Filter/ProductFilter';
import ProductList from '../components/ProductList/ProductList';
import { useDispatch } from 'react-redux';
import { setFilters, setSortBy } from '../store/dataSlice';

const Shop = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };

  const handleSortChange = (sortBy) => {
    dispatch(setSortBy(sortBy));
  };

  return (
    <div className="page">
      <section className='page-header'>
        <h3>Shop All Products</h3>
        <p>Browse our complete collection of premium products</p>
      </section>

      <section className='products-section'>
        <ProductFilter 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        <ProductList /> 
      </section>
    </div>
  );
};

export default Shop;