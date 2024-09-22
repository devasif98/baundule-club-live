import api from "../axios";

// save package
export const savePackage = async (data) => {
  try {
    const response = await api.post("/packages", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data ?? error;
  }
};

// get all packages
export const getAllPackages = async () => {
  try {
    const response = await api.get(`/packages`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get filtered packages
export const getPackages = async (
  categories,
  division,
  duration,
  page,
  limit
) => {
  try {
    const response = await api.get(
      `/packages?categories=${categories}&division=${division}&duration=${duration}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// get single package
export const getSinglePackage = async (id) => {
  try {
    const response = await api.get(`/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// update package
export const updatePackage = async (id, data) => {
  try {
    const response = await api.put(`/packages/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data ?? error;
  }
};

// delete package
export const deletePackage = async (id) => {
  try {
    const response = await api.delete(`/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data ?? error;
  }
};
