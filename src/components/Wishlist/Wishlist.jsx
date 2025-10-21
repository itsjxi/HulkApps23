import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../store/wishlistSlice';
import { addToCart } from '../../store/productSlice';
import './Wishlist.css';

const Wishlist = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist?.items || []);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.variants?.[0]?.id || item.id,
      title: item.title,
      price: item.variants?.[0]?.price || '0',
      image: item.images?.[0]?.src || '',
      quantity: 1
    }));
    dispatch(removeFromWishlist(item.id));
  };

  if (!isOpen) return null;

  return (
    <div className="wishlist-modal">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <div className="wishlist-header-text">
            <i className="fas fa-heart"></i>
            <span>Wishlist ({wishlistItems.length})</span>
          </div>
          <button className="close-wishlist" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="wishlist-items">
          {wishlistItems.length === 0 ? (
            <div className="empty-wishlist">
              <i className="fas fa-heart"></i>
              <p>Your wishlist is empty</p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img src={item.images?.[0]?.src || ''} alt={item.title} />
                <div className="wishlist-item-details">
                  <p>{item.title}</p>
                  <p>${item.variants?.[0]?.price || '0'}</p>
                </div>
                <div className="wishlist-item-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemoveFromWishlist(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;