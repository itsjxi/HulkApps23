import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SearchModal.css';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector(state => state.products.items || []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter(product =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.vendor?.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 8);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-header">
          <div className="search-input-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              autoFocus
            />
          </div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="search-results">
          {searchTerm.trim() && (
            <>
              <div className="results-header">
                {filteredProducts.length > 0 
                  ? `${filteredProducts.length} results found`
                  : 'No products found'
                }
              </div>
              <div className="results-grid">
                {filteredProducts.map(product => (
                  <div key={product.id} className="result-item">
                    <img 
                      src={product.images?.[0]?.src || product.variants?.[0]?.featured_image?.src} 
                      alt={product.title} 
                    />
                    <div className="result-info">
                      <h4>{product.title}</h4>
                      <p className="result-price">${product.variants?.[0]?.price}</p>
                      <p className="result-type">{product.product_type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;