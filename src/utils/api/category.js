import api from "../axios";

// save category
export const saveCategory = async (data) => {
  try {
    const response = await api.post("/categories", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data ?? error;
  }
};

// get all categories
export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get single category
export const getSingleCategory = async (id) => {
  try {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update category
export const updateCategory = async (id, data) => {
  try {
    const response = await api.put(`/categories/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data ?? error;
  }
};

// delete category
export const deleteCategory = async (id) => {
  try {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data ?? error;
  }
};
