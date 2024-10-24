import apiClient from "../../helpers/apiClient";

const getLengthFromApi = async (endpoint, path = "length") => {
  try {
    const res = await apiClient(endpoint);
    return path === "length" ? res.data?.length : res.data?.content?.length;
  } catch (error) {
    return 0;
  }
};

// Exported functions for different endpoints
export const carsLength = () => getLengthFromApi("/car");

export const brandsLength = () => getLengthFromApi("/brand", "content");

export const productsLength = () => getLengthFromApi("/product", "content");

export const carPartsLength = () => getLengthFromApi("/carPart", "content");

export const ordersLength = () => getLengthFromApi("/order", "content");

export const adsLength = () => getLengthFromApi("/advertisement");
