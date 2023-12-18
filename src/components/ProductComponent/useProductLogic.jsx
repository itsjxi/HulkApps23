
// custom hook for seleccting the variant
import { useState } from 'react';

export const useVariantSelection = (initialVariant) => {
  const [selectedVariant, setSelectedVariant] = useState(initialVariant);

  const handleOptionChange = (optionType, value) => {
    setSelectedVariant((prevOptions) => ({
      ...prevOptions,
      [optionType]: value,
    }));
  };

  return {
    selectedVariant,
    handleOptionChange,
  };
};
