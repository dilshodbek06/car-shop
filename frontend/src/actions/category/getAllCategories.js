import apiClient from "../../helpers/apiClient";

const getCategories = async () => {
  try {
    const res = await apiClient.get("/api/v1/carPart");
    return res.data;
  } catch (error) {
    return [];
  }
};

export default getCategories;
