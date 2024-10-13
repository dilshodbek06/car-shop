import apiClient from "../../helpers/apiClient";

// Get all categories
export const getCategories = async () => {
  try {
    const res = await apiClient.get("/api/v1/carPart");
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Create a new category
export const createCategory = async (data) => {
  try {
    const res = await apiClient.post("/api/v1/carPart", data);
    return res.data;
  } catch (error) {
    console.error("Error creating category:", error);
    return null;
  }
};

// Get category by ID
export const getCategoryById = async (id) => {
  try {
    const res = await apiClient.get(`/api/v1/carPart/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    return null;
  }
};

// Delete category by ID
export const deleteCategory = async (id) => {
  try {
    await apiClient.delete(`/api/v1/carPart/${id}`);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    return { success: false };
  }
};

// Update category by ID
export const updateCategory = async (id, newData) => {
  try {
    await apiClient.put(`/api/v1/carPart/${id}`, newData);
    return { success: true };
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error);
    return { success: false };
  }
};
