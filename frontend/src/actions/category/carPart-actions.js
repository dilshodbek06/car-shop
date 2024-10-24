import apiClient from "../../helpers/apiClient";

export const getAllCategories = async (currentPage) => {
  try {
    const res = await apiClient(`/carPart`, "get", null, { page: currentPage });
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createNewCategory = async (data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/carPart");
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
      brandId: data?.brandId,
    };

    const carPartFormData = new FormData();
    carPartFormData.append("data", JSON.stringify(obj));
    carPartFormData.append("prefix", "/carPart");
    carPartFormData.append("photo", data?.image);

    const res = await apiClient(
      `/carPart`,
      "POST",
      carPartFormData,
      null,
      true
    );
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteCategory = async (id) => {
  try {
    await apiClient(`/carPart/delete/${id}`, "delete", null);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const updateCategory = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/carPart");
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

    const carPartFormData = new FormData();
    carPartFormData.append("data", JSON.stringify(obj));
    carPartFormData.append("prefix", "/carPart");
    carPartFormData.append("photo", data?.image);

    const res = await apiClient(`/car`, "PUT", carPartFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};
