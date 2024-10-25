import apiClient from "../../../helpers/apiClient";

export const getAllAdsTextList = async () => {
  try {
    const res = await apiClient(`/advertisement`, "get");
    return res.data;
  } catch (error) {
    return [];
  }
};

export const createNewAdsText = async (data) => {
  try {
    const res = await apiClient(`/advertisement`, "POST", data);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteAdsText = async (id) => {
  try {
    const res = await apiClient(`/advertisement/${id}`, "delete", null);
    console.log(!res.error);
    if (!res?.error) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
};

export const updateAdsText = async (id, data) => {
  try {
    const res = await apiClient(
      `/advertisement/${id}`,
      "PUT",
      { title: data?.title },
      null,
      true
    );
    return res.data;
  } catch (error) {
    return null;
  }
};
