//component for productinfo name and price 

const ProductInfo = ({ productType, price }) => (
  <div className="product-info">
    <strong>{productType}</strong>
    <strong>${price}</strong>
  </div>
);

export default ProductInfo;
