import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/productSlice';
import { addToWishlist, removeFromWishlist } from '../../store/wishlistSlice';
import { useVariantSelection } from './useProductLogic';
import { getCurrentVariant, calculatePriceAndImage } from './utils';
import ColorOptions from './ColorOptions';
import SizeOptions from './SizeOptions';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist?.items || []);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  // Destructuring properties from the product object
  const { title, variants, options, product_type } = product;

  // Ensure we have variants
  if (!variants || variants.length === 0) {
    return null;
  }

  // Setting initial state for variant selection
  const initialState = {
    color: variants[0]?.option1 || null,
    size: variants[0]?.option2 || null,
  };

  // Handling variant selection logic
  const { selectedVariant, handleOptionChange } = useVariantSelection(initialState);

  const currentVariant = getCurrentVariant(variants, selectedVariant);
  const { price, image } = calculatePriceAndImage(currentVariant, variants[0]);

  // Handle add to cart
  const handleAddToCart = () => {
    if (currentVariant) {
      dispatch(
        addToCart({
          id: currentVariant.id,
          title: product.title,
          price: currentVariant.price,
          image: image,
          quantity: 1
        })
      );
    }
  };

  // Handle wishlist toggle
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="product-container">
      <ProductImage src={image} alt={title} />
      <div className="product-details">
        <h3 className="product-name">{title}</h3>
        <ProductInfo productType={product_type} price={price} />
        
        {options && options[0] && options[0].values.length > 1 && (
          <ColorOptions
            options={options[0].values}
            selectedColor={selectedVariant.color}
            handleOptionChange={handleOptionChange}
          />
        )}
        
        {options && options[1] && options[1].values.length > 1 && (
          <SizeOptions
            options={options[1].values}
            selectedSize={selectedVariant.size}
            handleOptionChange={handleOptionChange}
          />
        )}
        
        <div className="product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i>
            Add to Cart
          </button>
          <button 
            className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
            onClick={handleWishlistToggle}
            aria-label="Add to wishlist"
          >
            <i className={`fas fa-heart ${isInWishlist ? 'filled' : ''}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
