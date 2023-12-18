import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/productSlice';
import { useVariantSelection } from './useProductLogic';
import { getCurrentVariant, calculatePriceAndImage } from './utils';
import ColorOptions from './ColorOptions';
import SizeOptions from './SizeOptions';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const Product = ({ product }) => {

  
  const dispatch = useDispatch();

  //destructuring the propertiesfrom the product object prop
  const { title, variants, options, product_type } = product;

  //setting the initial state for varient selction initial it will took the first color and first size as per the data in options  by default 

  const initialState = {
    color: variants[0].option1,
    size: variants[0].option2,
  };

  //handeling the varient  selction logic : i amde a customhook for selcting my variable
  const { selectedVariant, handleOptionChange } = useVariantSelection(initialState);

  const currentVariant = getCurrentVariant(variants, selectedVariant);
  const { price, image } = calculatePriceAndImage(currentVariant, variants[0]);



  //here we are gving the updated state when ever clicking on add to cart button 
  const handleAddToCart = () => {
    if (currentVariant) {
      dispatch(
        addToCart({
          variant: currentVariant,
          quantity: 1,
          product_type: product.product_type,
        })
      );
      console.log('Item added to cart:', {
        variant: currentVariant,
        quantity: 1,
        product_type: product.product_type,
      });
    }
  };

  return (
    <div className="product-container">
      <ProductImage src={image} alt={title} />
      <div className="product-details">
        <ProductInfo productType={product_type} price={price} />
        <ColorOptions
          options={options[0].values}
          selectedColor={selectedVariant.color}
          handleOptionChange={handleOptionChange}
        />
        {options[1] && (
          <SizeOptions
            options={options[1].values}
            selectedSize={selectedVariant.size}
            handleOptionChange={handleOptionChange}
          />
        )}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
