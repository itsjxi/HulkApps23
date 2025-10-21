import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/productSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';

const SearchResults = ({ searchQuery, onBackToHome }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items || []);
  const wishlistItems = useSelector(state => state.wishlist?.items || []);
  
  const searchResults = products.filter(product =>
    product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.product_type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.vendor?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <section className='page-header'>
        <button className='back-btn' onClick={onBackToHome}>
          <i className='fas fa-arrow-left'></i> Back
        </button>
        <h3>Search Results</h3>
        <p>Found {searchResults.length} results for "{searchQuery}"</p>
      </section>

      <section className='products-section'>
        {searchResults.length === 0 ? (
          <div className='no-results'>
            <i className='fas fa-search'></i>
            <p>No products found for "{searchQuery}"</p>
            <p>Try searching with different keywords</p>
          </div>
        ) : (
          <div className='product-list'>
            {searchResults.map(product => {
              const isInWishlist = wishlistItems.some(item => item.id === product.id);
              
              const handleWishlistToggle = () => {
                if (isInWishlist) {
                  dispatch(removeFromWishlist(product.id));
                } else {
                  dispatch(addToWishlist(product));
                }
              };
              
              return (
                <div key={product.id} className='product-container'>
                  <img src={product.images?.[0]?.src || ''} alt={product.title} />
                  <div className='product-details'>
                    <div className='product-name'>{product.title}</div>
                    <div className='product-price'>${product.variants?.[0]?.price || '0'}</div>
                    <div className='product-actions'>
                      <button 
                        className='add-to-cart'
                        onClick={() => dispatch(addToCart({
                          id: product.variants?.[0]?.id || product.id,
                          title: product.title,
                          price: product.variants?.[0]?.price || '0',
                          image: product.images?.[0]?.src || '',
                          quantity: 1
                        }))}
                      >
                        <i className='fas fa-shopping-cart'></i>
                        Add to Cart
                      </button>
                      <button 
                        className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
                        onClick={handleWishlistToggle}
                      >
                        <i className='fas fa-heart'></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchResults;