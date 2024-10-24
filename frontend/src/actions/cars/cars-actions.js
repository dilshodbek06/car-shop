import apiClient from "../../helpers/apiClient";

export const getAllCars = async () => {
  try {
    const res = await apiClient(`/car`, "get");
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createNewCar = async (data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/car");
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

    const carFormData = new FormData();
    carFormData.append("data", JSON.stringify(obj));
    carFormData.append("prefix", "/car");
    carFormData.append("photo", data?.image);

    const res = await apiClient(`/car`, "POST", carFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteCar = async (id) => {
  try {
    await apiClient(`/car/delete/${id}`, "delete", null);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const updateCar = async (id, data) => {
  try {
    const formData = new FormData();
    formData.append("photo", data?.image);
    formData.append("prefix", "/car");
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

    const carFormData = new FormData();
    carFormData.append("data", JSON.stringify(obj));
    carFormData.append("prefix", "/car");
    carFormData.append("photo", data?.image);

    const res = await apiClient(`/car`, "PUT", carFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};
