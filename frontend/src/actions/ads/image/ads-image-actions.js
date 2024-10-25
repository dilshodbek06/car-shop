import apiClient from "../../../helpers/apiClient";

export const getAllAdsImageList = async () => {
  try {
    const res = await apiClient(`/carousel`, "get");
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createNewAdsImage = async (data) => {
  try {
    // const formData = new FormData();
    // formData.append("photo", data?.image);
    // formData.append("prefix", "/advertisement");
    // const result = await apiClient(
    //   `/file/upload`,
    //   "POST",
    //   formData,
    //   null,
    //   true
    // );
    // const obj = {
    //   photoId: result?.data,
    //   name: data?.name,
    //   id: "",
    // };

    const brandFormData = new FormData();
    brandFormData.append("prefix", "/carousel");
    brandFormData.append("photo", data?.image);
    const res = await apiClient(`/carousel`, "POST", brandFormData, null, true);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteAdsImage = async (id) => {
  try {
    await apiClient(`/brand/delete/${id}`, "delete", null);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

export const updateAdsImage = async (id, data) => {
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
