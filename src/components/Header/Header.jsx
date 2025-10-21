import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = ({ onCartToggle, onSearchToggle, onNavigate, currentPage, onWishlistToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const cartItems = useSelector(state => state.cart?.items || []);
  const wishlistItems = useSelector(state => state.wishlist?.items || []);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src="/images/HulkApp.svg.svg" alt="HulkApps" className="logo-img" />
          <span className="logo-text">HulkApps</span>
        </div>

        {/* Navigation */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'shop' ? 'active' : ''}`}
            onClick={() => handleNavClick('shop')}
          >
            Shop
          </button>
          <button 
            className={`nav-link ${currentPage === 'categories' ? 'active' : ''}`}
            onClick={() => handleNavClick('categories')}
          >
            Categories
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>

        {/* Search */}
        <div className="header-search">
          <div className="search-input-container">
            <input 
              type="text" 
              placeholder="Search products..."
              className="search-input"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  onSearchToggle(e.target.value.trim());
                  e.target.value = '';
                }
              }}
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        {/* Actions */}
        <div className="header-actions">
          
          <button className="action-btn wishlist-btn" onClick={onWishlistToggle} aria-label="Wishlist">
            <i className="fas fa-heart"></i>
            {wishlistItems.length > 0 && (
              <span className="wishlist-badge">{wishlistItems.length}</span>
            )}
          </button>
          
          <div className="user-dropdown">
            <button className="action-btn" onClick={toggleUserDropdown} aria-label="Account">
              <i className="fas fa-user"></i>
            </button>
            {isUserDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#profile" className="dropdown-item">My Profile</a>
                <a href="#orders" className="dropdown-item">My Orders</a>
                <a href="#wishlist" className="dropdown-item">Wishlist</a>
                <hr className="dropdown-divider" />
                <a href="#login" className="dropdown-item">Login</a>
                <a href="#signup" className="dropdown-item">Sign Up</a>
              </div>
            )}
          </div>
          
          <button className="action-btn cart-btn" onClick={onCartToggle} aria-label="Cart">
            <i className="fas fa-shopping-bag"></i>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;