import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/productSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import ProductList from '../components/ProductList/ProductList';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items || []);
  const wishlistItems = useSelector(state => state.wishlist?.items || []);
  
  const categories = [...new Set(products.map(product => product.product_type))].filter(Boolean);
  const categoryProducts = selectedCategory 
    ? products.filter(p => p.product_type === selectedCategory)
    : [];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <div className="page">
        <section className='page-header'>
          <button className='back-btn' onClick={handleBackToCategories}>
            <i className='fas fa-arrow-left'></i> Back to Categories
          </button>
          <h3>{selectedCategory}</h3>
          <p>{categoryProducts.length} products found</p>
        </section>
        <section className='products-section'>
          <div className='product-list'>
            {categoryProducts.map(product => {
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
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className='page-header'>
        <h3>Product Categories</h3>
        <p>Explore our different product categories</p>
      </section>

      <section className='categories-grid'>
        {categories.map((category, index) => (
          <div 
            key={index} 
            className='category-card'
            onClick={() => handleCategoryClick(category)}
          >
            <h3>{category}</h3>
            <p>{products.filter(p => p.product_type === category).length} products</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Categories;