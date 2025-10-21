import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Header from './components/Header/Header';
import Cart from './components/cart/cartOpeningButton';
import Wishlist from './components/Wishlist/Wishlist';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearchToggle = (query) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleWishlistToggle = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSearchQuery('');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'shop': return <Shop />;
      case 'categories': return <Categories />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'search': return <SearchResults searchQuery={searchQuery} onBackToHome={handleBackToHome} />;
      default: return <Home />;
    }
  };

  return (
    <div className='app'>
      <Header 
        onCartToggle={handleCartToggle}
        onSearchToggle={handleSearchToggle}
        onWishlistToggle={handleWishlistToggle}
        onNavigate={handleNavigation}
        currentPage={currentPage}
      />
      
      <main className='main-content'>
        {renderPage()}
      </main>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <Wishlist isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App
