import { useState } from 'react'

import './App.css'
import ProductList from './components/ProductList/ProductList'
import { Provider, useSelector } from 'react-redux';
import store from './store/store'
import BottomPage from './components/BottomPage/bottompage';
import Cart from './components/cart/cartOpeningButton';

function App() {
 


  return (
    <>
    <Provider store = {store}>
      <div className='container'>
      <img src='/images/HulkApp.svg.svg'/>
    <h2>Featured Collection</h2>
    <div className= "hopme-para">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar ac tortor imperdiet commodo.</div>
      <ProductList/> 
      <BottomPage/>  
      <Cart/>
      </div>
    </Provider>
      
    </>
  )
}

export default App
