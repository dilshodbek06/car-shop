import apiClient from "../../helpers/apiClient";

export const getCategories = async () => {
  try {
    const res = await apiClient.get("/api/v1/carPart");
    return res.data;
  } catch (error) {
    return [];
  }
};
export const getCategoryById = async (id) => {
  try {
    const res = await apiClient.get("/api/v1/carPart/" + id);
    return res.data;
  } catch (error) {
    return null;
  }
};
