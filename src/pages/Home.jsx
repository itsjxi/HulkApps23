import React from 'react';
import ProductFilter from '../components/Filter/ProductFilter';
import ProductList from '../components/ProductList/ProductList';
import BottomPage from '../components/BottomPage/bottompage';
import { useDispatch } from 'react-redux';
import { setFilters, setSortBy } from '../store/dataSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };

  const handleSortChange = (sortBy) => {
    dispatch(setSortBy(sortBy));
  };

  return (
    <div className="page">
      <section className='hero-section'>
        <h3>Featured Collection</h3>
        <p className='hero-description'>
          Discover our curated selection of premium products designed for modern living.
        </p>
      </section>

      <section className='products-section'>
        <ProductFilter 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        <ProductList /> 
      </section>
      
      <BottomPage />
    </div>
  );
};

export default Home;