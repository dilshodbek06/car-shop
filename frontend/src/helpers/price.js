export const calculateDiscountPercent = (originalPrice, discountedPrice) => {
  if (originalPrice <= 0) {
    throw new Error("Original price must be greater than zero.");
  }

  const discount = originalPrice - discountedPrice;
  const discountPercent = (discount / originalPrice) * 100;

  return Math.round(discountPercent); // Round to nearest whole number
};
