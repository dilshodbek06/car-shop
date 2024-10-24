import apiClient from "../../helpers/apiClient";

export const getAllBrands = async (currentPage) => {
  try {
    const res = await apiClient(`/brand`, "get", null, { page: currentPage });
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createNewBrand = async (data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/brand");
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
      id: "",
    };

    const brandFormData = new FormData();
    brandFormData.append("data", JSON.stringify(obj));
    brandFormData.append("prefix", "/brand");
    brandFormData.append("photo", data?.image);

    const res = await apiClient(`/brand`, "POST", brandFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteBrand = async (id) => {
  try {
    await apiClient(`/brand/delete/${id}`, "delete", null);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const updateBrand = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/brand");
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

    const brandFormData = new FormData();
    brandFormData.append("data", JSON.stringify(obj));
    brandFormData.append("prefix", "/brand");
    brandFormData.append("photo", data?.image);

    const res = await apiClient(`/brand`, "PUT", brandFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};
