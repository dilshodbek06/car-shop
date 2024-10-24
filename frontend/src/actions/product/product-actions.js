import apiClient from "../../helpers/apiClient";

export const getAllProducts = async (currentPage) => {
  try {
    const res = await apiClient(`/product`, "get", null, { page: currentPage });
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createNewProduct = async (data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/product");
    const result = await apiClient(
      `/file/upload`,
      "POST",
      formData,
      null,
      true
    );
    const obj = {
      photoId: result?.data,
      name: data?.title,
      id: "",
      carPartId: data?.category,
      carId: data?.car,
      description: data?.description,
      price: data?.price,
    };

    const productFormData = new FormData();
    productFormData.append("data", JSON.stringify(obj));
    productFormData.append("prefix", "/product");
    productFormData.append("photo", data?.image);

    const res = await apiClient(
      `/product`,
      "POST",
      productFormData,
      null,
      true
    );
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    await apiClient(`/product/delete/${id}`, "delete", null);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const updateProduct = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/product");
    const result = await apiClient(
      `/file/upload`,
      "POST",
      formData,
      null,
      true
    );
    const obj = {
      photoId: result?.data,
      name: data?.name,
      id,
    };

    const productFormData = new FormData();
    productFormData.append("data", JSON.stringify(obj));
    productFormData.append("prefix", "/product");
    productFormData.append("photo", data?.image);

    const res = await apiClient(`/product`, "PUT", productFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};
