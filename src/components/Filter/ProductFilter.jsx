import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProductFilter.css';

const ProductFilter = ({ onFilterChange, onSortChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  
  const products = useSelector(state => state.products.items || []);
  
  // Extract categories from products
  const categories = ['all', ...new Set(products.map(p => p.product_type).filter(Boolean))];
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' }
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, priceRange });
  };

  const handlePriceChange = (e) => {
    const newRange = [0, parseInt(e.target.value)];
    setPriceRange(newRange);
    onFilterChange({ category: selectedCategory, priceRange: newRange });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="product-filter">
      <div className="filter-header">
        <button 
          className="filter-toggle"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <i className="fas fa-filter"></i>
          <span>Filters</span>
          <i className={`fas fa-chevron-down ${isFilterOpen ? 'rotate' : ''}`}></i>
        </button>

        <div className="sort-container">
          <label htmlFor="sort">Sort:</label>
          <select id="sort" value={sortBy} onChange={handleSortChange}>
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={`filter-content ${isFilterOpen ? 'open' : ''}`}>
        <div className="filter-section">
          <h4>Category</h4>
          <div className="category-filters">
            {categories.slice(0, 6).map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h4>Price Range</h4>
          <div className="price-filter">
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="price-slider"
            />
            <div className="price-display">
              $0 - ${priceRange[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;