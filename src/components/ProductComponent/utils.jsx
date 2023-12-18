

//calulation for updating the cart items based on slected variaant its price image and add to cart

export const getCurrentVariant = (variants, selectedVariant) => {
  return variants.find(
    (variant) =>
      (variant.option1.toLowerCase() === selectedVariant.color.toLowerCase() ||
        !selectedVariant.color) &&
      (variant.option2.toLowerCase() === selectedVariant.size.toLowerCase() ||
        !selectedVariant.size)
  );
};

export const calculatePriceAndImage = (currentVariant, defaultVariant) => {
  const price = currentVariant ? currentVariant.price : defaultVariant.price;
  const image = currentVariant
    ? currentVariant.featured_image.src
    : defaultVariant.featured_image.src;

  return { price, image };
};
